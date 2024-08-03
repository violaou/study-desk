import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    root: '.',
    publicDir: './src/assets',
    resolve: {
        alias: {
          '/@src': path.resolve(__dirname, '/./src'),
          '/@assets': path.resolve(__dirname, '/./src/assets'),
        },
    },
    build: {
        outDir: './dist',
    }
});
