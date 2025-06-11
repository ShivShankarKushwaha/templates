import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [sveltekit(),tailwindcss()],
	test: {
		environment: 'jsdom',
		globals: true,
		testTimeout: 10000,
		dir: './tests/unitTests',
		setupFiles: 'tests/setupTests.ts',
		deps: {
			optimizer: {
				ssr: {
					enabled: true,
					include: ['date-fns', '@sveltejs/kit']
				}
			}
		},
		coverage: {
			reporter: ['text', 'json', 'html'],
			include: ['src/**/*'],
			exclude: ['src/tests/**/*', 'src/**/*.svelte', 'src/lib/**/*']
		}
	},
	server: {
		host: true,
		proxy: {
			'/api': {
				target: 'http://localhost:5500/api',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
});
