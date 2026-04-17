import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default tseslint.config(
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
		rules: {
			'prettier/prettier': 'error',
			'no-console': 'warn',
			curly: 'error',
			'no-return-await': 'error',
		},
	},
	prettierConfig,
);
