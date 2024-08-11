import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const ASSET_URL = env.ASSET_URL || '';

  console.log('Setting base to ', ASSET_URL);

  return {
    plugins: [react()],
    define: { 'process.env': {} },
    base: `${ASSET_URL}/`,
  }
});
