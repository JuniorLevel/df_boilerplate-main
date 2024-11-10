```tsx
import React from 'react';
import { createRootRoute, createRoute, createRouter, createMemoryHistory, RouterProvider } from '@tanstack/react-router';
import { useMediaQuery } from 'react-responsive';
import { LayoutPrmt } from '@/primitives/LayoutPrmt/LayoutPrmt';
import { OrdersFilterProviderPrmt } from '@/primitives/OrdersFilterPrmt/OrdersFilterContextPrmt';
import { OrdersFilterOpenedPrmt } from '@/primitives/OrdersFilterPrmt/OrdersFilterOpenedPrmt/OrdersFilterOpenedPrmt';
import { screenSMMax } from '@/primitives/OrdersFilterPrmt/OrdersFilterDialogsPrmt/OrdersFilterDesktopDialogPrmt/OrdersFilterDesktopDialogPrmt.styles';
import { OrdersFilterMobileDialogPrmt } from '@/primitives/OrdersFilterPrmt/OrdersFilterDialogsPrmt/OrdersFilterMobileDialogPrmt/OrdersFilterMobileDialogPrmt';
import { OrdersFilterDesktopDialogPrmt } from '@/primitives/OrdersFilterPrmt/OrdersFilterDialogsPrmt/OrdersFilterDesktopDialogPrmt/OrdersFilterDesktopDialogPrmt';
import { sidebarButtons, filters } from './data';
import { StyleguidistRouterWrapper, OutletComponent } from '@/StyleguidistWrapper';

const rootRoute = createRootRoute({
	component: function RootComponent() {
		const mobileView = useMediaQuery({ maxWidth: screenSMMax });
		return mobileView ? (
			<OrdersFilterProviderPrmt>
				<OutletComponent />
			</OrdersFilterProviderPrmt>
		) : (
			<OrdersFilterProviderPrmt>
				<LayoutPrmt buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
					<OrdersFilterOpenedPrmt open dialog filters={filters} />
				</LayoutPrmt>
				<OutletComponent />
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

const routeTree = rootRoute.addChildren([IndexRoute, DialogRoute]);

const memoryHistory = createMemoryHistory({
	initialEntries: ['/'],
});

const router = createRouter({ routeTree, history: memoryHistory });

<StyleguidistRouterWrapper router={router} />;
```
Design view of component

```tsx
import Image from './OrdersFilterOpenedWithDialogPage.png';

<img src={Image} alt="image"/>
```