import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path"


// https://vitejs.dev/config/

export default defineConfig({
    plugins: [vue(),

    ],
    // 静态资源加载路径：

    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
            "@assets": resolve(__dirname, "src/assets"),
            path: "path-browserify",
        }
    },
    css: {
        // css预处理器
        preprocessorOptions: {
            less: {
                javascriptEnable: true,
                charset: false,
                additionalData: '@import "./src/assets/global.less";',
            },
        },
    },
    base: process.env.NODE_ENV === 'production' ? './' : '/guo_date_calc/',

    build: {
        assetsDir: "assets",
        rollupOptions: {
            output: {
                chunkFileNames: "js/[name]-[hash].js",
                entryFileNames: "js/[name]-[hash].js",
                assetFileNames: "[ext]/[name]-[hash].[ext]",
            }
        },
        commonjsOptions: {
            exclude: ['ckeditor/*'],
        },
    },
})
