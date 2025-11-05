import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

export default defineConfig({
	plugins: [svelte({ hot: !process.env.VITEST })],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./vitest.setup.ts'],
		exclude: ['**/node_modules/**', '**/dist/**', '**/src/routes/**/*.spec.ts']
	},
	resolve: {
		alias: {
			$lib: resolve(__dirname, './src/lib')
		}
	}
});
