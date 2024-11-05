import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { AppRouter } from './routes/AppRouter';
import { ThemeWrapper } from './primitives/ThemeWrapper/ThemeWrapper';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);
root.render(
	<StrictMode>
		<ThemeWrapper>
			<AppRouter />
		</ThemeWrapper>
	</StrictMode>
);
