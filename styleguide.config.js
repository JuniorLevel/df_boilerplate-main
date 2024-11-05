/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

module.exports = {
	title: 'Документация',
	pagePerSection: true,
	exampleMode: 'expand',
	updateExample(props, exampleFilePath) {
		const { settings = {}, lang } = props;
		if (typeof settings.file === 'string') {
			const filepath = path.resolve(path.dirname(exampleFilePath), settings.file);
			const { ...restSettings } = settings;
			const content = fs.readFileSync(filepath, 'utf8');
			const updatedContent = content
				.replace(/^\s*\/\/\s?@flow\s*\n/, '')
				.trim()
				.replace(/^export.*$/gm, '')
				.trim()
				.replace(/^\s*return.*$/gm, '')
				.trim()
				.replace(/\s*[/);\\}]\s*;?$/, '')
				.trim()
				.replace(/\s*[/);\\}]\s*;?$/, '')
				.trim();
			return {
				content: updatedContent,
				settings: restSettings,
				lang,
			};
		}
		return props;
	},
	sections: [
		{ name: 'CardPrmt', content: 'src/primitives/CardPrmt/CardPrmt.md' },
		// { name: 'CardTitle', content: 'src/primitives/CardElement/CardTitle/CardTitle.md' },
		// {
		// 	name: 'FiltersSearchList',
		// 	content: 'src/FiltersSearchList/FiltersSearchList.md',
		// },
		// { name: 'Footer', content: 'src/Footer/Footer.md' },
		// { name: 'Layout', content: 'src/Layout/Layout.md' },
		// {
		// 	name: 'TimeWidgetsPanel',
		// 	content: 'src/TimeWidgetsPanel/TimeWidgetsPanel.md',
		// 	sections: [
		// 		{
		// 			name: 'TimeWidgets1',
		// 			content: 'src/TimeWidgetsPanel/TimeWidgets1/TimeWidgets1.md',
		// 		},
		// 		{
		// 			name: 'TimeWidgets2',
		// 			content: 'src/TimeWidgetsPanel/TimeWidgets2/TimeWidgets2.md',
		// 		},
		// 		{
		// 			name: 'TimeWidgets3',
		// 			content: 'src/TimeWidgetsPanel/TimeWidgets3/TimeWidgets3.md',
		// 		},
		// 		{
		// 			name: 'TimeWidgets4',
		// 			content: 'src/TimeWidgetsPanel/TimeWidgets4/TimeWidgets4.md',
		// 		},
		// 		{
		// 			name: 'TimeWidgets5',
		// 			content: 'src/TimeWidgetsPanel/TimeWidgets5/TimeWidgets5.md',
		// 		},
		// 		{
		// 			name: 'TimeWidgets6',
		// 			content: 'src/TimeWidgetsPanel/TimeWidgets6/TimeWidgets6.md',
		// 		},
		// 		{
		// 			name: 'TimeWidgets7',
		// 			content: 'src/TimeWidgetsPanel/TimeWidgets7/TimeWidgets7.md',
		// 		},
		// 		{
		// 			name: 'TextWidget',
		// 			content: 'src/TimeWidgetsPanel/TextWidget/TextWidget.md',
		// 		},
		// 		{
		// 			name: 'TextTimeRange1',
		// 			content: 'src/TimeWidgetsPanel/TextTimeRange1/TextTimeRange1.md',
		// 		},
		// 		{
		// 			name: 'TextTimeRange2',
		// 			content: 'src/TimeWidgetsPanel/TextTimeRange2/TextTimeRange2.md',
		// 		},
		// 		{
		// 			name: 'TextTimeRange3',
		// 			content: 'src/TimeWidgetsPanel/TextTimeRange3/TextTimeRange3.md',
		// 		},
		// 		{
		// 			name: 'SelectAndPerson',
		// 			content: 'src/TimeWidgetsPanel/SelectAndPerson/SelectAndPerson.md',
		// 		},
		// 		{
		// 			name: 'SelectPersonRange',
		// 			content: 'src/TimeWidgetsPanel/SelectPersonRange/SelectPersonRange.md',
		// 		},
		// 	],
		// 	sectionDepth: 18,
		// },
		// {
		// 	name: '',
		// 	content: '',
		// },
		// {
		// 	name: '',
		// 	content: '',
		// },
	],
	styles: {
		StyleGuide: {
			content: { minWidth: '100%', padding: 5 },
		},
		Playground: {
			preview: { padding: 0 },
		},
	},
	styleguideComponents: {
		Wrapper: path.join(__dirname, 'src/StyleguidistWrapper.tsx'),
	},
	ignore: ['**/__snapshots__/**', '**/src/*.test.ts'],
	webpackConfig: require('./webpack.config.js'),
};
