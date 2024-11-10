import React, { act } from 'react';
import { Context as ResponsiveContext } from 'react-responsive';
import { render } from '@testing-library/react';
import '../../../__mocks__/fileMock';
import { OrdersFilterClosedWithDialogPage } from './OrdersFilterClosedWithDialogPage';

describe('OrdersFilterOpenedWithDialogPage', () => {
	test('should render OrdersFilterOpenedWithDialogPage component without crashing', async () => {
		await act(async () => {
			const { container } = render(<OrdersFilterClosedWithDialogPage />);
			expect(container).toBeInTheDocument();
		});
	});

	test('matches the snapshot desktop', async () => {
		await act(async () => {
			const { container: desktop } = render(
				<ResponsiveContext.Provider value={{ width: 1920 }}>
					<OrdersFilterClosedWithDialogPage />
				</ResponsiveContext.Provider>
			);
			expect(desktop).toMatchSnapshot();
		});
	});

	test('matches the snapshot laptop', async () => {
		await act(async () => {
			const { container: laptop } = render(
				<ResponsiveContext.Provider value={{ width: 1024 }}>
					<OrdersFilterClosedWithDialogPage />
				</ResponsiveContext.Provider>
			);
			expect(laptop).toMatchSnapshot();
		});
	});

	test('matches the snapshot mobile', async () => {
		await act(async () => {
			const { container: mobile } = render(
				<ResponsiveContext.Provider value={{ width: 360 }}>
					<OrdersFilterClosedWithDialogPage />
				</ResponsiveContext.Provider>
			);
			expect(mobile).toMatchSnapshot();
		});
	});
});
