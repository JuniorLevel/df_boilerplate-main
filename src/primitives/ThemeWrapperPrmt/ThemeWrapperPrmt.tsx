import React, { FC, ReactNode } from 'react';
import { ConfigProvider, theme } from 'antd';
import { Reset } from 'styled-reset';
import { ThemeProviderPrmt, ThemeContextPrmt } from './ThemeContextPrmt';
import { GlobalStyle } from '@/global.styles';

interface IThemeWrapperPrmtProps {
	children: ReactNode;
}

export const ThemeWrapperPrmt: FC<IThemeWrapperPrmtProps> = ({ children }) => (
	<ThemeProviderPrmt>
		<ThemeContextPrmt.Consumer>
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
		</ThemeContextPrmt.Consumer>
	</ThemeProviderPrmt>
);