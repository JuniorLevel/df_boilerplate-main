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
	assetsDir: 'src',
	sections: [
		{
			name: 'Templates',
			description: 'Компоненты папки templates',
			sections: [
				{
					name: 'RoutesPage',
					content: 'src/templates/RoutesPage/RoutesPage.md',
				},
				{
					name: 'SingleRoutePage',
					content: 'src/templates/SingleRoutePage/SingleRoutePage.md',
				},
				{
					name: 'OrderListPreviewPage',
					content: 'src/templates/OrderListPreviewPage/OrderListPreviewPage.md',
				},
				{
					name: 'DiffOpenedCardsPage',
					content: 'src/templates/DiffOpenedCardsPage/DiffOpenedCardsPage.md',
				},
				{
					name: 'DiffClosedCardsPage',
					content: 'src/templates/DiffClosedCardsPage/DiffClosedCardsPage.md',
				},
				{
					name: 'OrdersFilterPages',
					description: 'Примеры страниц с открытыми и закрытыми фильтрами',
					sections: [
						{
							name: 'OrdersFilterClosedPage',
							content: 'src/templates/OrdersFilterClosedPage/OrdersFilterClosedPage.md',
						},
						{
							name: 'OrdersFilterOpenedPage',
							content: 'src/templates/OrdersFilterOpenedPage/OrdersFilterOpenedPage.md',
						},
					],
					sectionDepth: 2,
				},
				{
					name: 'OrdersFilterWithDialogPages',
					description: 'Примеры страниц с диалогом',
					sections: [
						{
							name: 'OrdersFilterClosedWithDialogPage',
							content: 'src/templates/OrdersFilterClosedWithDialogPage/OrdersFilterClosedWithDialogPage.md',
						},
						{
							name: 'OrdersFilterOpenedWithDialogPage',
							content: 'src/templates/OrdersFilterOpenedWithDialogPage/OrdersFilterOpenedWithDialogPage.md',
						},
						{
							name: 'DiffOpenedCardsWithDialogPage',
							content: 'src/templates/DiffOpenedCardsWithDialogPage/DiffOpenedCardsWithDialogPage.md',
						},
					],
					sectionDepth: 3,
				},
				{
					name: 'OrderPage',
					content: 'src/templates/OrderPage/OrderPage.md',
				},
				{
					name: 'Layout',
					content: 'src/templates/HomePage/Layout.md',
				},
				{
					name: 'WelcomePage1',
					content: 'src/templates/WelcomePages/WelcomePage1/WelcomePage1.md',
				},
				{
					name: 'WelcomePage5',
					content: 'src/templates/WelcomePages/WelcomePage5/WelcomePage5.md',
				},
			],
			sectionDepth: 14,
		},
		{
			name: 'Construct',
			description: 'Компоненты папки construct',
			sections: [
				{
					name: 'PersonRoleCnstr',
					content: 'src/construct/PersonRoleCnstr/PersonRoleCnstr.md',
				},
				{
					name: 'PersonRoleTimeCnstr',
					content: 'src/construct/PersonRoleTimeCnstr/PersonRoleTimeCnstr.md',
				},
				{
					name: 'PersonRoleTimeRangeCnstr',
					content: 'src/construct/PersonRoleTimeRangeCnstr/PersonRoleTimeRangeCnstr.md',
				},
				{
					name: 'TextRangeTimeCnstr',
					content: 'src/construct/TextRangeTimeCnstr/TextRangeTimeCnstr.md',
				},
				{ name: 'TextTime1Cnstr', content: 'src/construct/TextTime1Cnstr/TextTime1Cnstr.md' },
				{ name: 'TextTime2Cnstr', content: 'src/construct/TextTime2Cnstr/TextTime2Cnstr.md' },
				{ name: 'FileTimeCnstr', content: 'src/construct/FileTimeCnstr/FileTimeCnstr.md' },
				{ name: 'TimeRangeWidgetCnstr', content: 'src/construct/TimeRangeWidgetCnstr/TimeRangeWidgetCnstr.md' },
				{ name: 'TimeWidgetCnstr', content: 'src/construct/TimeWidgetCnstr/TimeWidgetCnstr.md' },
				{ name: 'FileWidgetCnstr', content: 'src/construct/FileWidgetCnstr/FileWidgetCnstr.md' },
			],
			sectionDepth: 10,
		},
		{
			name: 'Primitives',
			description: 'Компоненты папки primitives',
			sections: [
				{ name: 'AvatarPrmt', content: 'src/primitives/AvatarPrmt/AvatarPrmt.md' },
				{ name: 'BadgePrmt', content: 'src/primitives/BadgePrmt/BadgePrmt.md' },
				{ name: 'CardPrmt', content: 'src/primitives/CardPrmt/CardPrmt.md' },
				{ name: 'ColPrmt', content: 'src/primitives/ColPrmt/ColPrmt.md' },
				{ name: 'CustomClockPrmt', content: 'src/primitives/CustomClockPrmt/CustomClockPrmt.md' },
				{ name: 'DateWithTimeBlockPrmt', content: 'src/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt.md' },
				{ name: 'DaysPanelPrmt', content: 'src/primitives/DaysPanelPrmt/DaysPanelPrmt.md' },
				{ name: 'FiltersSearchListPrmt', content: 'src/primitives/FiltersSearchListPrmt/FiltersSearchListPrmt.md' },
				{ name: 'FlexPrmt', content: 'src/primitives/FlexPrmt/FlexPrmt.md' },
				{ name: 'FooterPrmt', content: 'src/primitives/FooterPrmt/FooterPrmt.md' },
				{ name: 'LayoutPrmt', content: 'src/primitives/LayoutPrmt/LayoutPrmt.md' },
				{ name: 'OrderListPreviewPrmt', content: 'src/primitives/OrderListPreviewPrmt/OrderListPreviewPrmt.md' },
				{
					name: 'OrdersFilterPrmt',
					description: 'Компоненты CardsClosed & CardsOpened',
					sections: [
						{ name: 'OrdersFilterClosedPrmt', content: 'src/primitives/OrdersFilterPrmt/OrdersFilterClosedPrmt/OrdersFilterClosedPrmt.md' },
						{ name: 'OrdersFilterOpenedPrmt', content: 'src/primitives/OrdersFilterPrmt/OrdersFilterOpenedPrmt/OrdersFilterOpenedPrmt.md' },
					],
					sectionDepth: 2,
				},
				{ name: 'OrderTabsPrmt', content: 'src/primitives/OrderTabsPrmt/OrderTabsPrmt.md' },
				{ name: 'PaginationPrmt', content: 'src/primitives/PaginationPrmt/PaginationPrmt.md' },
				{ name: 'RangeTime1Prmt', content: 'src/primitives/RangeTime1Prmt/RangeTime1Prmt.md' },
				{ name: 'RangeTime2Prmt', content: 'src/primitives/RangeTime2Prmt/RangeTime2Prmt.md' },
				{ name: 'RangeTime3Prmt', content: 'src/primitives/RangeTime3Prmt/RangeTime3Prmt.md' },
				{ name: 'RangeTime4Prmt', content: 'src/primitives/RangeTime4Prmt/RangeTime4Prmt.md' },
				{ name: 'RangeTime5Prmt', content: 'src/primitives/RangeTime5Prmt/RangeTime5Prmt.md' },
				{ name: 'RowPrmt', content: 'src/primitives/RowPrmt/RowPrmt.md' },
				{ name: 'SelectPrmt', content: 'src/primitives/SelectPrmt/SelectPrmt.md' },
				{ name: 'TextPrmt', content: 'src/primitives/TextPrmt/TextPrmt.md' },
				{ name: 'TextTypographyPrmt', content: 'src/primitives/TextTypographyPrmt/TextTypographyPrmt.md' },
				{ name: 'Time1Prmt', content: 'src/primitives/Time1Prmt/Time1Prmt.md' },
				{ name: 'Time2Prmt', content: 'src/primitives/Time2Prmt/Time2Prmt.md' },
				{ name: 'Time3Prmt', content: 'src/primitives/Time3Prmt/Time3Prmt.md' },
				{ name: 'WeeksAndYearsPanelPrmt', content: 'src/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt.md' },
				{ name: 'WelcomePrmt', content: 'src/primitives/WelcomePrmt/WelcomePrmt.md' },
				{ name: 'WidgetContainerPrmt', content: 'src/primitives/WidgetContainerPrmt/WidgetContainerPrmt.md' },
			],
			sectionDepth: 31,
		},
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
