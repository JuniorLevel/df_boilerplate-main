import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintConfigAirbnb from 'eslint-config-airbnb-typescript';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginNoInlineStyles from 'eslint-plugin-no-inline-styles';
import eslintPluginRestrictImports from 'eslint-plugin-restrict-imports';
import * as eslintImportResolverTypescript from 'eslint-import-resolver-typescript';
import eslintPluginJest from 'eslint-plugin-jest';

/** @type {import('eslint').Linter.Config} */

export default tseslint.config(
	js.configs.recommended,
	...tseslint.configs.recommended,
	eslintConfigPrettier,
	tseslint.configs.eslintRecommended,
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
			'eslint-resolver-typescript': eslintImportResolverTypescript,
			jest: eslintPluginJest,
		},
	},
	{ ignores: ['node_modules', 'dist', '__mocks__', '.husky', 'github-pages', 'coverage', 'styleguide'] },
	{
		languageOptions: {
			globals: { ...globals.node, ...globals.browser, ...globals.es2021, ...eslintPluginJest.environments.globals.globals },
			parserOptions: {
				project: ['./tsconfig.json'],
			},
		},
	},
	{
		files: ['**/*.{js,ts,tsx}', '**/*.spec.tsx', '**/*.test.tsx'],
		rules: {
			...prettierPlugin.configs.recommended.rules,
			...eslintConfigPrettier.rules,
			'eslint-import/no-unused-modules': 'error',
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
			'jest/no-disabled-tests': 'warn',
			'jest/no-focused-tests': 'error',
			'jest/no-identical-title': 'error',
			'jest/prefer-to-have-length': 'warn',
			'jest/valid-expect': 'error',
			'eslint-restrict-imports/restrict-imports': [
				'error',
				{
					antd: {
						locations: ['./src/construct/*', './src/templates/*', './src/pages/*', './src/routes/*'],
						message: 'Компоненты Ant Design могут быть импортированы лишь в папку primitives',
					},
					'@ant-design/*': {
						locations: ['./src/construct/*', './src/templates/*', './src/pages/*', './src/routes/*'],
						message: 'Компоненты Ant Design могут быть импортированы лишь в папку primitives',
					},
					'primitives/*': {
						locations: ['./src/pages/*', './src/routes/*'],
						message: 'Компоненты primitives могут быть импортированы в папки construct и templates',
					},
					'templates/*': {
						locations: ['./src/pages/*'],
						message: 'В папке templates могут быть импортированы компоненты primitives и construct',
					},
					'pages/*': { locations: ['./src/primitives/*', './src/routes/*'], message: 'В папке pages могут быть импортированы лишь компоненты templates и construct' },
					formik: {
						locations: ['./src/primitives/*', './src/construct/*', './src/templates/*', './src/routes/*'],
						message: 'Только компоненты pages может импортировать пакет formik',
					},
					'routes/*': {
						locations: ['./src/primitives/*', './src/construct/*', './src/templates/*', './src/routes/*'],
						message: 'Компоненты routes могут импортировать лишь компоненты pages',
					},
				},
			],
		},
	}
);
