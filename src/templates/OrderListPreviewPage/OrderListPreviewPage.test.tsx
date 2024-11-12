import React from 'react';
import { describe, test } from '@jest/globals';
import { Context as ResponsiveContext } from 'react-responsive';
import { render } from '@testing-library/react';
import '../../../__mocks__/fileMock';
import { OrderListPreviewPage } from './OrderListPreviewPage';

describe('OrderListPreviewPage', () => {
	test('should render OrderListPreviewPage component without crashing', () => {
		const { container } = render(<OrderListPreviewPage />);
		expect(container).toBeInTheDocument();
	});
	test('matches the snapshot desktop', () => {
		const { container: desktop } = render(
			<ResponsiveContext.Provider value={{ width: 1920 }}>
				<OrderListPreviewPage />
			</ResponsiveContext.Provider>
		);
		expect(desktop).toMatchSnapshot();
	});
	test('matches the snapshot laptop', () => {
		const { container: laptop } = render(
			<ResponsiveContext.Provider value={{ width: 1024 }}>
				<OrderListPreviewPage />
			</ResponsiveContext.Provider>
		);
		expect(laptop).toMatchSnapshot();
	});
	test('matches the snapshot mobile', () => {
		const { container: mobile } = render(
			<ResponsiveContext.Provider value={{ width: 360 }}>
				<OrderListPreviewPage />
			</ResponsiveContext.Provider>
		);
		expect(mobile).toMatchSnapshot();
	});
});
