import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import Unocss from '@unocss/vite';
import presetUno from '@unocss/preset-uno';
import presetIcons from '@unocss/preset-icons';
import tsconfigPaths from 'vite-tsconfig-paths'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), Unocss({ presets: [presetUno(), presetIcons()] })],
});
