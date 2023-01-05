import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'; // vitejs.dev/config
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
    server: {
        proxy: {
            '/api': 'http://localhost:5000/',
        },
    },
    plugins: [
        react({
            babel: {
                plugins: [
                    ['babel-plugin-styled-components', { ssr: false, pure: true, displayName: true, fileName: true }],
                ],
            },
        }),
        // createHtmlPlugin({ inject: { data: { title: 'cas' } } }),
        tsconfigPaths(),
        viteCommonjs(),
    ],
    build: {
        manifest: true,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                },
            },
        },
    },
});
