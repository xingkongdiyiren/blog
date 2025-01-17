import { readdir } from 'fs/promises';
import matter from 'gray-matter';

/**
 * 顶部导航（一级）
 */
export const COLS = [
    { text: '体验', link: '/EXPERIENCE/' },
    { text: '折腾', link: '/CODES/' },
    { text: '杂谈', link: '/ESSAY/' },
    { text: '关于', link: '/ABOUT/' },
    { text: '归档', link: '/ARCHIVE/' },
];

/**
 * ! 各分类只对应单一文件夹，暂未考虑多级目录、混合目录的情况
 * @description 根据 `COLS` 生成侧边导航（二级）
 * @returns {Object} sidebar
 */
export const getSidebar = (): Object => {
    const list = {};
    const IGNORE_TEXT = '[TODO]';
    const INDEX_FILE = 'index';

    COLS.forEach(async ({ link, text }) => {
        const dir = `./docs${link}`;
        const files = (await readdir(dir)) || [];

        list[link] = [
            {
                text,
                items: files
                    .map((file) => {
                        const path = `${dir}${file}`;
                        const filename = file.replace(/\.md$/, '');
                        const filepath = `${link}${filename}`;
                        const { data = {} } = matter.read(path) || {};
                        return {
                            ...data,
                            text: data.title || filename,
                            link: filepath,
                        };
                    })
                    .filter(({ text, link }) => link.indexOf(INDEX_FILE) === -1 && text.indexOf(IGNORE_TEXT) === -1)
                    .sort((a, b) => {
                        const av = a['updateTime'] ? new Date(a['updateTime']).valueOf() : 0;
                        const bv = b['updateTime'] ? new Date(b['updateTime']).valueOf() : 0;
                        return bv - av;
                    }),
            },
        ];
    });

    return list;
};
