import React, { createContext, FC, ReactNode, useEffect, useMemo, useState } from 'react';

interface IThemeProvider {
	children: ReactNode;
}

interface IThemeContext {
	currentTheme: string;
	setCurrentTheme: (currentTheme: string) => void;
	isFooter: boolean;
	setIsFooter: (isFooter: boolean) => void;
}

export const ThemeContext = createContext<IThemeContext>({
	currentTheme: 'light',
	setCurrentTheme: () => {},
	isFooter: false,
	setIsFooter: () => {},
});

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
	const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme') ?? 'light');

	useEffect(() => {
		localStorage.setItem('theme', currentTheme);
	}, [currentTheme]);

	const [isFooter, setIsFooter] = useState<boolean>(false);

	const value = useMemo<IThemeContext>(
		() => ({
			currentTheme,
			setCurrentTheme,
			isFooter,
			setIsFooter,
		}),
		[currentTheme, isFooter]
	);

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
