import React, { createContext, FC, ReactNode, useEffect, useMemo, useState } from 'react';

interface IThemeProviderPrmtProps {
	children: ReactNode;
}

interface IThemeContextPrmtProps {
	currentTheme: string;
	setCurrentTheme: (currentTheme: string) => void;
	isFooter: boolean;
	setIsFooter: (isFooter: boolean) => void;
}

export const ThemeContextPrmt = createContext<IThemeContextPrmtProps>({
	currentTheme: 'light',
	setCurrentTheme: () => {},
	isFooter: false,
	setIsFooter: () => {},
});

export const ThemeProviderPrmt: FC<IThemeProviderPrmtProps> = ({ children }) => {
	const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme') ?? 'light');

	useEffect(() => {
		localStorage.setItem('theme', currentTheme);
	}, [currentTheme]);

	const [isFooter, setIsFooter] = useState<boolean>(false);

	const value = useMemo<IThemeContextPrmtProps>(
		() => ({
			currentTheme,
			setCurrentTheme,
			isFooter,
			setIsFooter,
		}),
		[currentTheme, isFooter]
	);

	return <ThemeContextPrmt.Provider value={value}>{children}</ThemeContextPrmt.Provider>;
};
