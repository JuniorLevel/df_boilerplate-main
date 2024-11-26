import React from 'react';
import { describe, test } from '@jest/globals';
import { Context as ResponsiveContext } from 'react-responsive';
import { render, act, waitFor, cleanup } from '@testing-library/react';
import '../../../__mocks__/fileMock';
import { OrdersFilterOpenedWithDialogPage } from './OrdersFilterOpenedWithDialogPage';
import { TestableRouterUI } from '@/TestableRouterUI';

describe('OrdersFilterOpenedWithDialogPage', () => {
	afterEach(() => {
		cleanup();
	});
	test('should render OrdersFilterOpenedWithDialogPage component without crashing', async () => {
		const { container } = render(
			<TestableRouterUI>
				<OrdersFilterOpenedWithDialogPage />
			</TestableRouterUI>
		);
		await waitFor(() => {
			expect(container).toBeInTheDocument();
		});
	});

	test('matches the snapshot desktop', async () => {
		await act(async () => {
			const { container: desktop } = render(
				<ResponsiveContext.Provider value={{ width: 1920 }}>
					<TestableRouterUI>
						<OrdersFilterOpenedWithDialogPage />
					</TestableRouterUI>
				</ResponsiveContext.Provider>
			);
			await waitFor(() => {
				expect(desktop).toMatchSnapshot();
			});
		});
	});

	test('matches the snapshot laptop', async () => {
		await act(async () => {
			const { container: laptop } = render(
				<ResponsiveContext.Provider value={{ width: 1024 }}>
					<TestableRouterUI>
						<OrdersFilterOpenedWithDialogPage />
					</TestableRouterUI>
				</ResponsiveContext.Provider>
			);
			await waitFor(() => {
				expect(laptop).toMatchSnapshot();
			});
		});
	});

	test('matches the snapshot mobile', async () => {
		await act(async () => {
			const { container: mobile } = render(
				<ResponsiveContext.Provider value={{ width: 360 }}>
					<TestableRouterUI>
						<OrdersFilterOpenedWithDialogPage />
					</TestableRouterUI>
				</ResponsiveContext.Provider>
			);
			await waitFor(() => {
				expect(mobile).toMatchSnapshot();
			});
		});
	});
});