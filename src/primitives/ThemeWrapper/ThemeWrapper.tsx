import React, { FC, ReactNode } from 'react';
import { ConfigProvider, theme } from 'antd';
import { Reset } from 'styled-reset';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import { GlobalStyle } from '@/global.styles';

interface IThemeWrapperProps {
	children: ReactNode;
}

export const ThemeWrapper: FC<IThemeWrapperProps> = ({ children }) => (
	<ThemeProvider>
		<ThemeContext.Consumer>
			{({ currentTheme }) => (
				<ConfigProvider
					theme={{
						algorithm: currentTheme === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,
					}}
				>
					{children}
					<GlobalStyle />
					<Reset />
				</ConfigProvider>
			)}
		</ThemeContext.Consumer>
	</ThemeProvider>
);
