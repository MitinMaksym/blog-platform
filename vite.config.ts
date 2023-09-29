import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
    const isDev = mode === 'development';
    const env = loadEnv(mode, process.cwd(), '');
    return {
        build: {
            target: 'esnext',
        },
        server: {
            port: 3000,
        },
        define: {
            __IS_DEV__: JSON.stringify(true),
            __PROJECT__: JSON.stringify('frontend'),
            'process.env.API_URL': JSON.stringify(env.API_URL),
        },
        css: {
            modules: {
                generateScopedName: isDev ? '[local]--[hash:base64:5]' : '[hash:base64:8]',
            },
        },

        plugins: [
            svgr({
                exportAsDefault: true,
            }),
            react(),
            checker({
                typescript: true,
            }),
            tsconfigPaths(),
        ],
    };
});
