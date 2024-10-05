import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import unusedImports from 'eslint-plugin-unused-imports';
import typescriptEslint from '@typescript-eslint/eslint-plugin';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser
			}
		},
		plugins: {
			'@typescript-eslint': typescriptEslint,
			'unused-imports': unusedImports
		},
		rules: {
			eqeqeq: ['error', 'always'],
			curly: 'error',
			'@typescript-eslint/no-explicit-any': 'off',
			'svelte/no-at-html-tags': 'off',

			'@typescript-eslint/no-unused-vars': [
				'off',
				{
					args: 'none'
				}
			],

			'no-unused-vars': 'off',
			'unused-imports/no-unused-imports': 'error',

			'unused-imports/no-unused-vars': [
				'error',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_'
				}
			]
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	}
);
