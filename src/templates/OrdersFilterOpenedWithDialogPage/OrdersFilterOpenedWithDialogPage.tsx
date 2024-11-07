import React from 'react';
import { Outlet, createRootRoute, createRoute, createRouter, createMemoryHistory, RouterProvider } from '@tanstack/react-router';
import { useMediaQuery } from 'react-responsive';
import { sidebarButtons, filters } from './data';
import { LayoutPrmt } from '@/primitives/LayoutPrmt/LayoutPrmt';
import { OrdersFilterProviderPrmt } from '@/primitives/OrdersFilterPrmt/OrdersFilterContextPrmt';
import { OrdersFilterOpenedPrmt } from '@/primitives/OrdersFilterPrmt/OrdersFilterOpenedPrmt/OrdersFilterOpenedPrmt';
import { screenSMMax } from '@/primitives/OrdersFilterPrmt/OrdersFilterDialogsPrmt/OrdersFilterDesktopDialogPrmt/OrdersFilterDesktopDialogPrmt.styles';
import { OrdersFilterMobileDialogPrmt } from '@/primitives/OrdersFilterPrmt/OrdersFilterDialogsPrmt/OrdersFilterMobileDialogPrmt/OrdersFilterMobileDialogPrmt';
import { OrdersFilterDesktopDialogPrmt } from '@/primitives/OrdersFilterPrmt/OrdersFilterDialogsPrmt/OrdersFilterDesktopDialogPrmt/OrdersFilterDesktopDialogPrmt';

const rootRoute = createRootRoute({
	component: function RootComponent() {
		const mobileView = useMediaQuery({ maxWidth: screenSMMax });
		return mobileView ? (
			<OrdersFilterProviderPrmt>
				<Outlet />
			</OrdersFilterProviderPrmt>
		) : (
			<OrdersFilterProviderPrmt>
				<LayoutPrmt buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
					<OrdersFilterOpenedPrmt open dialog filters={filters} />
				</LayoutPrmt>
				<Outlet />
			</OrdersFilterProviderPrmt>
		);
	},
});

const IndexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: function IndexComponent() {
		const mobileView = useMediaQuery({ maxWidth: screenSMMax });
		return (
			mobileView && (
				<LayoutPrmt buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
					<OrdersFilterOpenedPrmt open dialog filters={filters} />
				</LayoutPrmt>
			)
		);
	},
});

const DialogRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/dialog',
	component: function DialogComponent() {
		const mobileView = useMediaQuery({ maxWidth: screenSMMax });
		return mobileView ? (
			<LayoutPrmt buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
				<OrdersFilterMobileDialogPrmt />
			</LayoutPrmt>
		) : (
			<OrdersFilterDesktopDialogPrmt />
		);
	},
});

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

const routeTree = rootRoute.addChildren([IndexRoute, DialogRoute]);

const memoryHistory = createMemoryHistory({
	initialEntries: ['/'],
});

const router = createRouter({ routeTree, history: memoryHistory });

export const OrdersFilterOpenedWithDialogPage = (): React.ReactNode => <RouterProvider router={router} />;
