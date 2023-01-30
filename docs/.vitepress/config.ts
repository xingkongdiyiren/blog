import { getSidebar, COLS } from './dev';

export default {
    title: ' ',
    titleTemplate: 'Ceil.Top',
    description: 'Blog Of KEVINSHEEP',
    outDir: './dist',
    lastUpdated: true,
    markdown: {
        lineNumbers: true,
        breaks: true,
    },
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [{ text: '首页', link: '/' }, ...COLS],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/kevinsheep/' },
            {
                icon: {
                    svg: '<svg t="1671269883748" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1367" width="200" height="200"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" fill="#888888" p-id="1368"></path></svg>',
                },
                link: 'https://kevinsheep.gitee.io/blog',
            },
        ],
        sidebar: getSidebar(),
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2010-present, KEVINSHEEP.',
        },
    },
    head: [
        [
            'script',
            {
                src: 'https://hm.baidu.com/hm.js?ff7110a78443140968558cad1f050297',
            },
        ],
    ],
};
