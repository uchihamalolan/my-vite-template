import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import Unocss from '@unocss/vite';
import presetUno from '@unocss/preset-uno';
import presetIcons from '@unocss/preset-icons';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), Unocss({ presets: [presetUno(), presetIcons()] })],
});
