import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
import { checker } from 'vite-plugin-checker';
import dynamicImport from 'vite-plugin-dynamic-import';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [checker({ typescript: true }), dynamicImport(), react(), svgr(), tsconfigPaths()],
    server: {
      port: 8080,
    },
    define: {
      'process.env': env,
    },
  };
});
