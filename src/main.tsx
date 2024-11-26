import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeWrapperPrmt } from './primitives/ThemeWrapperPrmt/ThemeWrapperPrmt';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { orderChatRoute, orderDashboardRoute, orderDocumentsRoute, orderHistoryRoute, orderMainRoute, orderRoute } from './routes/order';
import { indexRoute, rootRoute } from './routes/index';
import { homeRoute } from './routes/home';
import { ordersFilterOpenedRoute } from './routes/ordersFilterOpened';
import { ordersFilterClosedRoute } from './routes/ordersFilterClosed';
import { orderListPreviewRoute } from './routes/orderListPreview';
import { diffOpenedCardsRoute } from './routes/diffOpenedCards';
import { diffClosedCardsRoute } from './routes/diffClosedCards';
import { welcomePage1Route } from './routes/welcomePage1';
import { welcomePage8Route } from './routes/welcomePage8';
import { welcomePage7Route } from './routes/welcomePage7';
import { welcomePage6Route } from './routes/welcomePage6';
import { welcomePage5Route } from './routes/welcomePage5';
import { welcomePage4Route } from './routes/welcomePage4';
import { welcomePage3Route } from './routes/welcomePage3';
import { welcomePage2Route } from './routes/welcomePage2';
import { ordersFilterClosedDialogRoute, ordersFilterClosedWithDialogRoute } from './routes/ordersFilterClosedWithDialog';
import { diffOpenedCardsDialogRoute, diffOpenedCardsWithDialogRoute } from './routes/diffOpenedCardsWithDialog';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ordersFilterOpenedWithDialogRoute } from './routes/ordersFilterOpenedWithDialog';

export const routeTree = rootRoute.addChildren([
	indexRoute,
	homeRoute,
	ordersFilterOpenedRoute,
	ordersFilterClosedRoute,
	orderListPreviewRoute,
	diffOpenedCardsRoute,
	diffClosedCardsRoute,
	welcomePage1Route,
	welcomePage2Route,
	welcomePage3Route,
	welcomePage4Route,
	welcomePage5Route,
	welcomePage6Route,
	welcomePage7Route,
	welcomePage8Route,
	ordersFilterOpenedWithDialogRoute,
	ordersFilterClosedWithDialogRoute.addChildren([ordersFilterClosedDialogRoute]),
	diffOpenedCardsWithDialogRoute.addChildren([diffOpenedCardsDialogRoute]),
	orderRoute.addChildren([orderMainRoute, orderChatRoute, orderDashboardRoute, orderDocumentsRoute, orderHistoryRoute]),
]);

export const router = createRouter({ routeTree, defaultPreload: 'intent' });

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);
root.render(
	<StrictMode>
		<ThemeWrapperPrmt>
			<RouterProvider router={router} />
			<TanStackRouterDevtools router={router} initialIsOpen={false} position="bottom-right" />
		</ThemeWrapperPrmt>
	</StrictMode>
);
