import React, { act } from 'react';
import { Context as ResponsiveContext } from 'react-responsive';
import { render } from '@testing-library/react';
import '../../../__mocks__/fileMock';
import { DiffOpenedCardsWithDialogPage } from './DiffOpenedCardsWithDialogPage';

describe('OrdersFilterOpenedWithDialogPage', () => {
	test('should render OrdersFilterOpenedWithDialogPage component without crashing', async () => {
		await act(async () => {
			const { container } = render(<DiffOpenedCardsWithDialogPage />);
			expect(container).toBeInTheDocument();
		});
	}, 15000);

	test('matches the snapshot desktop', async () => {
		await act(async () => {
			const { container: desktop } = render(
				<ResponsiveContext.Provider value={{ width: 1920 }}>
					<DiffOpenedCardsWithDialogPage />
				</ResponsiveContext.Provider>
			);
			expect(desktop).toMatchSnapshot();
		});
	}, 15000);

	test('matches the snapshot laptop', async () => {
		await act(async () => {
			const { container: laptop } = render(
				<ResponsiveContext.Provider value={{ width: 1024 }}>
					<DiffOpenedCardsWithDialogPage />
				</ResponsiveContext.Provider>
			);
			expect(laptop).toMatchSnapshot();
		});
	}, 15000);

	test('matches the snapshot mobile', async () => {
		await act(async () => {
			const { container: mobile } = render(
				<ResponsiveContext.Provider value={{ width: 360 }}>
					<DiffOpenedCardsWithDialogPage />
				</ResponsiveContext.Provider>
			);
			expect(mobile).toMatchSnapshot();
		});
	}, 15000);
});
