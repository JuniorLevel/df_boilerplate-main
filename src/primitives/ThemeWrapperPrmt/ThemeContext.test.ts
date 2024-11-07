// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { ThemeProvider, ThemeContext } from './ThemeContext';

// describe('ThemeProvider', () => {
// 	it('Если текущее значение light', () => {
// 		localStorage.setItem('theme', 'light');
// 		render(
// 			<ThemeProvider>
// 				<ThemeContext.Consumer>
// 					{({ currentTheme }) => (
// 						<div data-testid="theme-value">{currentTheme}</div>
// 					)}
// 				</ThemeContext.Consumer>
// 			</ThemeProvider>
// 		);
// 		expect(screen.getByTestId('theme-value')).toHaveTextContent('light');
// 	});

// 	it('Если текущее значение dark', () => {
// 		localStorage.setItem('theme', 'dark');
// 		render(
// 			<ThemeProvider>
// 				<ThemeContext.Consumer>
// 					{({ currentTheme }) => (
// 						<div data-testid="theme-value">{currentTheme}</div>
// 					)}
// 				</ThemeContext.Consumer>
// 			</ThemeProvider>
// 		);
// 		expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');
// 	});

// 	it('Если меняем состояние на light', () => {
// 		render(
// 			<ThemeProvider>
// 				<ThemeContext.Consumer>
// 					{({ setCurrentTheme }) => (
// 						<button
// 							type="button"
// 							data-testid="change-theme"
// 							onClick={() => setCurrentTheme('light')}
// 						>
// 							Изменить тему
// 						</button>
// 					)}
// 				</ThemeContext.Consumer>
// 			</ThemeProvider>
// 		);
// 		fireEvent.click(screen.getByTestId('change-theme'));
// 		expect(localStorage.getItem('theme')).toBe('light');
// 	});

// 	it('Если меняем состояние на dark', () => {
// 		render(
// 			<ThemeProvider>
// 				<ThemeContext.Consumer>
// 					{({ setCurrentTheme }) => (
// 						<button
// 							type="button"
// 							data-testid="change-theme"
// 							onClick={() => setCurrentTheme('dark')}
// 						>
// 							Изменить тему
// 						</button>
// 					)}
// 				</ThemeContext.Consumer>
// 			</ThemeProvider>
// 		);
// 		fireEvent.click(screen.getByTestId('change-theme'));
// 		expect(localStorage.getItem('theme')).toBe('dark');
// 	});
// });
