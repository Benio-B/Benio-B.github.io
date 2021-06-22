import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import visualizer from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), visualizer()],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src'),
            },
            {
                find: 'vue-i18n',
                replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
            },
        ],
    },
    build: {
        chunkSizeWarningLimit: 700, // Default is 500
    },
});
