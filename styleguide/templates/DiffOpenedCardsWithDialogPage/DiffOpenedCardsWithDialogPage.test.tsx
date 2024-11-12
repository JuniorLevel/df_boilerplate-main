import React from 'react';
import { describe, test } from '@jest/globals';
import { Context as ResponsiveContext } from 'react-responsive';
import { render, waitFor, act, cleanup } from '@testing-library/react';
import '../../../__mocks__/fileMock';
import { DiffOpenedCardsWithDialogPage } from './DiffOpenedCardsWithDialogPage';

describe('DiffOpenedCardsWithDialogPage', () => {
	afterEach(() => {
		cleanup();
	});
	test('should render DiffOpenedCardsWithDialogPage component without crashing', async () => {
		await act(async () => {
			const { container } = render(<DiffOpenedCardsWithDialogPage />);
			await waitFor(() => {
				expect(container).toBeInTheDocument();
			});
		});
	});

	test('matches the snapshot desktop', async () => {
		await act(async () => {
			const { container: desktop } = render(
				<ResponsiveContext.Provider value={{ width: 1920 }}>
					<DiffOpenedCardsWithDialogPage />
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
					<DiffOpenedCardsWithDialogPage />
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
					<DiffOpenedCardsWithDialogPage />
				</ResponsiveContext.Provider>
			);
			await waitFor(() => {
				expect(mobile).toMatchSnapshot();
			});
		});
	});
});
