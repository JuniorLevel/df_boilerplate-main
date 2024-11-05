// import React from 'react';
// import { Context as ResponsiveContext } from 'react-responsive';
// import { render } from '@testing-library/react';

// import '../../__mocks__/fileMock';
// import { OrdersFilterOpenedWithDialogPage } from './OrdersFilterOpenedWithDialogPage';

// describe('OrdersFilterOpenedWithDialogPage', () => {
// 	test('should render OrdersFilterOpenedWithDialogPage component without crashing', () => {
// 		const { container } = render(<OrdersFilterOpenedWithDialogPage />);
// 		expect(container).toBeInTheDocument();
// 	});

// 	test('matches the snapshot desktop', () => {
// 		const { container: desktop } = render(
// 			<ResponsiveContext.Provider value={{ width: 1920 }}>
// 				<OrdersFilterOpenedWithDialogPage />
// 			</ResponsiveContext.Provider>
// 		);
// 		expect(desktop).toMatchSnapshot();
// 	});

// 	test('matches the snapshot laptop', () => {
// 		const { container: laptop } = render(
// 			<ResponsiveContext.Provider value={{ width: 1024 }}>
// 				<OrdersFilterOpenedWithDialogPage />
// 			</ResponsiveContext.Provider>
// 		);
// 		expect(laptop).toMatchSnapshot();
// 	});

// 	test('matches the snapshot mobile', () => {
// 		const { container: mobile } = render(
// 			<ResponsiveContext.Provider value={{ width: 360 }}>
// 				<OrdersFilterOpenedWithDialogPage />
// 			</ResponsiveContext.Provider>
// 		);
// 		expect(mobile).toMatchSnapshot();
// 	});
// });
