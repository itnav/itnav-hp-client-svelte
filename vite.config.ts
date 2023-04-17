import { fileURLToPath } from 'url';
import type {} from '@sveltejs/kit';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';
import type {} from 'vitest';
import sitemap from './sitemap.config';

export default defineConfig(({ mode }) => {
	const $env = loadEnv(mode, process.cwd(), '');

	Object.assign(process.env, $env);

	return {
		plugins: [sveltekit(), sitemap({ mode, host: $env.URL })],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}'],
		},
		define: { $env },
	};
});
