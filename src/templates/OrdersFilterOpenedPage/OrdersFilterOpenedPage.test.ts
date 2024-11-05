// import React from 'react';
// import { Context as ResponsiveContext } from 'react-responsive';
// import { render } from '@testing-library/react';
// import { OrdersFilterOpenedPage } from './OrdersFilterOpenedPage';
// import '../../__mocks__/fileMock';

// describe('OrdersFilterOpenedPage', () => {
// 	test('should render OrdersFilterOpenedPage component without crashing', () => {
// 		const { container } = render(<OrdersFilterOpenedPage />);
// 		expect(container).toBeInTheDocument();
// 	});
// 	test('matches the snapshot desktop', () => {
// 		const { container: desktop } = render(
// 			<ResponsiveContext.Provider value={{ width: 1920 }}>
// 				<OrdersFilterOpenedPage />
// 			</ResponsiveContext.Provider>
// 		);
// 		expect(desktop).toMatchSnapshot();
// 	});
// 	test('matches the snapshot laptop', () => {
// 		const { container: laptop } = render(
// 			<ResponsiveContext.Provider value={{ width: 1024 }}>
// 				<OrdersFilterOpenedPage />
// 			</ResponsiveContext.Provider>
// 		);
// 		expect(laptop).toMatchSnapshot();
// 	});
// 	test('matches the snapshot mobile', () => {
// 		const { container: mobile } = render(
// 			<ResponsiveContext.Provider value={{ width: 360 }}>
// 				<OrdersFilterOpenedPage />
// 			</ResponsiveContext.Provider>
// 		);
// 		expect(mobile).toMatchSnapshot();
// 	});
// });
