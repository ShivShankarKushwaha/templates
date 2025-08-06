import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		paths: {
			base: ''
		},
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			precompress: false,
			fallback: '200.html'
		}),
		alias: {
			'@apis': 'src/apis',
			'@components': 'src/components',
			'@images': 'src/images',
			'@lib': 'src/lib',
			'@routes': 'src/routes',
			'@screens': 'src/screens',
			'@scripts': 'src/scripts',
			'@stores': 'src/stores',
			'@styles': 'src/styles',
			'@types': 'src/types',
			'@utils': 'src/utils',
			'@static': 'static'
		}
	}
};

export default config;
