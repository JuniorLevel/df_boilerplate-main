// import React from 'react';
// import { Context as ResponsiveContext } from 'react-responsive';
// import { render } from '@testing-library/react';

// import '../../__mocks__/fileMock';
// import { DiffOpenedCardsWithDialogPage } from './DiffOpenedCardsWithDialogPage';

// describe('OrdersFilterOpenedWithDialogPage', () => {
// 	test('should render OrdersFilterOpenedWithDialogPage component without crashing', () => {
// 		const { container } = render(<DiffOpenedCardsWithDialogPage />);
// 		expect(container).toBeInTheDocument();
// 	});

// 	test('matches the snapshot desktop', () => {
// 		const { container: desktop } = render(
// 			<ResponsiveContext.Provider value={{ width: 1920 }}>
// 				<DiffOpenedCardsWithDialogPage />
// 			</ResponsiveContext.Provider>
// 		);
// 		expect(desktop).toMatchSnapshot();
// 	});

// 	test('matches the snapshot laptop', () => {
// 		const { container: laptop } = render(
// 			<ResponsiveContext.Provider value={{ width: 1024 }}>
// 				<DiffOpenedCardsWithDialogPage />
// 			</ResponsiveContext.Provider>
// 		);
// 		expect(laptop).toMatchSnapshot();
// 	});

// 	test('matches the snapshot mobile', () => {
// 		const { container: mobile } = render(
// 			<ResponsiveContext.Provider value={{ width: 360 }}>
// 				<DiffOpenedCardsWithDialogPage />
// 			</ResponsiveContext.Provider>
// 		);
// 		expect(mobile).toMatchSnapshot();
// 	});
// });
