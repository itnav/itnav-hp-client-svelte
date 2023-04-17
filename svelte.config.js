import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/**
 * @type {import('@sveltejs/kit').Config}
 * @see https://github.com/sveltejs/svelte-preprocess
 */
const config = {
	kit: {
		adapter: adapter({
			strict: false,
		}),
		paths: {
			base: process.env.BASE_PATH,
		},
	},
	preprocess: preprocess(),
};
export default config;
