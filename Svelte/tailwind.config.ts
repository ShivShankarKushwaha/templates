import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Manrope', 'sans-serif'],
				silk: ['Silkscreen', 'sans-serif']
			},
			colors: {
				primary: {
					DEFAULT: 'var(--primary-color)',
					dark: 'var(--dark-primary-color)'
				},
				secondary: {
					DEFAULT: 'var(--secondary-color)',
					dark: 'var(--dark-secondary-color)'
				},
				tertiary: {
					DEFAULT: 'var(--tertiary-color)',
					dark: 'var(--dark-tertiary-color)'
				}
			}
		}
	},

	plugins: []
} as Config;
