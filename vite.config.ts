import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'; // vitejs.dev/config
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [
                    ['babel-plugin-styled-components', { ssr: false, pure: true, displayName: true, fileName: true }],
                ],
            },
        }),
        tsconfigPaths(),
        viteCommonjs(),
    ],
    build: {
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
