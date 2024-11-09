import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProviderPrmt, ThemeContextPrmt } from './ThemeContextPrmt';

describe('ThemeProvider', () => {
	it('Если текущее значение light', () => {
		localStorage.setItem('theme', 'light');
		render(
			<ThemeProviderPrmt>
				<ThemeContextPrmt.Consumer>{({ currentTheme }) => <div data-testid="theme-value">{currentTheme}</div>}</ThemeContextPrmt.Consumer>
			</ThemeProviderPrmt>
		);
		expect(screen.getByTestId('theme-value')).toHaveTextContent('light');
	});

	it('Если текущее значение dark', () => {
		localStorage.setItem('theme', 'dark');
		render(
			<ThemeProviderPrmt>
				<ThemeContextPrmt.Consumer>{({ currentTheme }) => <div data-testid="theme-value">{currentTheme}</div>}</ThemeContextPrmt.Consumer>
			</ThemeProviderPrmt>
		);
		expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');
	});

	it('Если меняем состояние на light', () => {
		render(
			<ThemeProviderPrmt>
				<ThemeContextPrmt.Consumer>
					{({ setCurrentTheme }) => (
						<button type="button" data-testid="change-theme" onClick={() => setCurrentTheme('light')}>
							Изменить тему
						</button>
					)}
				</ThemeContextPrmt.Consumer>
			</ThemeProviderPrmt>
		);
		fireEvent.click(screen.getByTestId('change-theme'));
		expect(localStorage.getItem('theme')).toBe('light');
	});

	it('Если меняем состояние на dark', () => {
		render(
			<ThemeProviderPrmt>
				<ThemeContextPrmt.Consumer>
					{({ setCurrentTheme }) => (
						<button type="button" data-testid="change-theme" onClick={() => setCurrentTheme('dark')}>
							Изменить тему
						</button>
					)}
				</ThemeContextPrmt.Consumer>
			</ThemeProviderPrmt>
		);
		fireEvent.click(screen.getByTestId('change-theme'));
		expect(localStorage.getItem('theme')).toBe('dark');
	});
});
