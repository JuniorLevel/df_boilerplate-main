import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeWrapperPrmt } from './primitives/ThemeWrapperPrmt/ThemeWrapperPrmt';
import { AppRouter } from './routes/AppRouter';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);
root.render(
	<StrictMode>
		<ThemeWrapperPrmt>
			<AppRouter />
		</ThemeWrapperPrmt>
	</StrictMode>
);
