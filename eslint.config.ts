import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig(
	{
		ignores: ['build/**', 'coverage/**', 'node_modules/**'],
	},
	eslint.configs.recommended,
	tseslint.configs.recommended,
	{
		files: ['**/*.ts'],
		plugins: {
			prettier: prettierPlugin,
		},
		languageOptions: {
			parserOptions: {
				projectService: {
					allowDefaultProject: ['*.config.ts', 'tests/*.test.ts'],
				},
			},
		},
		rules: {
			'prettier/prettier': 'error',
			'no-console': 'warn',
			curly: 'error',
			'@typescript-eslint/return-await': ['error', 'in-try-catch'],
		},
	},
	prettierConfig,
);
