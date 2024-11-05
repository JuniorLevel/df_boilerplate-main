import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintConfigAirbnb from 'eslint-config-airbnb';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginNoInlineStyles from 'eslint-plugin-no-inline-styles';
import eslintPluginRestrictImports from 'eslint-plugin-restrict-imports';

/** @type {import('eslint').Linter.Config} */

export default tseslint.config(
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		plugins: {
			react: eslintReact,
			'@typescript-eslint': tseslint.plugin,
			'react-hooks': eslintReactHooks,
			'react-refresh': eslintReactRefresh,
			prettier: prettierPlugin,
			'prettier-config': eslintConfigPrettier,
			'eslint-airbnb': eslintConfigAirbnb,
			'eslint-import': eslintPluginImport,
			'eslint-no-inline-styles': eslintPluginNoInlineStyles,
			'eslint-restrict-imports': eslintPluginRestrictImports,
		},
	},
	{ ignores: ['node_modules', 'dist', '__mocks__', '.husky'] },
	{
		languageOptions: {
			globals: { ...globals.node, ...globals.browser, ...globals.es2021 },
			parserOptions: {
				project: ['tsconfig.json'],
			},
		},
	},
	{
		files: ['**/*.{js,ts,tsx}'],
		rules: {
			...prettierPlugin.configs.recommended.rules,
			...eslintConfigPrettier.rules,
			'prefer-const': 'error',
			'react/jsx-uses-react': 'error',
			'react/jsx-uses-vars': 'error',
			'eslint-import/no-extraneous-dependencies': 'off',
			'react/jsx-filename-extension': 'off',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			'react/function-component-definition': 'off',
			'eslint-import/prefer-default-export': 'off',
			'eslint-import/no-default-export': 'error',
			'consistent-return': 'off',
			'no-alert': 'off',
			'eslint-no-inline-styles/no-inline-styles': 'error',
			'@typescript-eslint/no-explicit-any': 'off',
			'eslint-restrict-imports/restrict-imports': [
				'error',
				{
					// antd: {
					// 	locations: ['./src/construct/*', './src/templates/*', './src/pages/*', './src/routes/*'],
					// 	message: 'Только primitives может импортировать компоненты antD',
					// },
					// 'primitives/*': {
					// 	locations: ['./src/templates/*', './src/pages/*', './src/routes/*'],
					// 	message: 'Только construct может импортировать компоненты primitives',
					// },
				},
			],
		},
	}
);
