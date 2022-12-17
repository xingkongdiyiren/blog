import axios from 'axios';
import { getAuthState } from '../utils';

const OWNER = 'kevinsheep';
const REPO = 'blog';

const client_id = 'Iv1.c81fcafbda51d6d6';

const remoteHost = 'https://github.com/';
const baseURL = 'https://api.github.com/';

const redirect_uri = 'https://ceil.top/login.html';
// const redirect_uri = 'http://localhost:3001/login.html';

const eggHost = 'https://api.ceil.top:8000';

const axiosService = axios.create({ baseURL });

const LS_KEY = 'ACCESS_DATA';

export const getLS = () => {
    const LS = JSON.parse(window.localStorage.getItem(LS_KEY) || '{}');
    return LS;
};

export const setLS = (data: object) => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(data));
};

export const removeLS = () => {
    window.localStorage.removeItem(LS_KEY);
};

// 三方认证页面
export const link_get_code = () => {
    removeLS();
    return `${remoteHost}login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&state=${getAuthState()}`;
};

// 使用用户授权码，通过后端服务中转，向认证服务器获取 `access_token`
export const getAccessToken = async (code: string, state: string) => {
    const data = { code, state };
    const res = await axiosService({ method: 'post', url: eggHost, data });

    if (res.data && res.data.access_token) {
        setLS(res.data);
    }

    return res.data;
};

// 使用 `refresh_token`，刷新 `access_token`
export const refreshAccessToken = async (refresh_token: string) => {
    const grant_type = 'refresh_token';
    const res = await axiosService({
        method: 'post',
        url: eggHost,
        params: { grant_type, refresh_token },
    });

    if (res.data.access_token) {
        setLS(res.data);
    }
    return res.data;
};

// 获取所有、某条 issue
export const getIssue = async (number?: number) => {
    const url = `/repos/${OWNER}/${REPO}/issues${number ? '/' + number : ''}`;
    return await axiosService({ url, method: 'get', params: {} });
};

axiosService.interceptors.request.use(
    (config) => {
        const { access_token } = getLS();

        if (access_token) {
            config.headers = {
                Authorization: `Bearer ${access_token}`,
                accept: 'application/vnd.github+json',
            };
        }

        return config;
    }
    // (error) => {
    //     console.log({ requestError: error });
    //     Promise.reject(error);
    // }
);

axiosService.interceptors.response.use(
    (response) => {
        // console.log({ response });
        return response;
    },
    async (error) => {
        console.log(error.response);
        // 如果未授权
        if ([401].includes(error?.response?.status)) {
            console.log(error.config);
            // 如果已刷新过，仍出错，则重新获取授权码
            if (error.config?.params.grant_type === 'refresh_token') {
                removeLS();
                location.href = link_get_code();
            }
            // 尝试刷新一次 token
            else {
                const { refresh_token } = getLS();
                const res = await refreshAccessToken(refresh_token);
                // 刷新 `access_token` 后再次请求
                if (res.access_token) {
                    return await axiosService(error.config);
                } else {
                    console.log('The code passed is incorrect or expired.');
                }
            }
        } else {
            Promise.reject(error);
        }
    }
);

// 获取某条 issue 的所有评论
export const getComments = async (number: number) => {
    const url = `/repos/${OWNER}/${REPO}/issues/${number}/comments`;
    return await axiosService({ url, method: 'get', params: {} });
};

export const addComment = async (number: number, body: string) => {
    const owner = OWNER;
    const repo = REPO;
    const url = `/repos/${OWNER}/${REPO}/issues/${number}/comments`;
    return await axiosService({
        url,
        method: 'post',
        data: { owner, repo, issue_number: number, body },
    });
};

export const addIssue = async (title: string, body?: string) => {
    const owner = OWNER;
    const repo = REPO;
    const labels = ['blog'];
    const url = `/repos/${OWNER}/${REPO}/issues`;
    return await axiosService({
        url,
        method: 'post',
        data: { owner, repo, title, labels, body },
    });
};

export default axiosService;
