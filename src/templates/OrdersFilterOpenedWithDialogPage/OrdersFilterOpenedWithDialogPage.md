```jsx
import React from 'react';
import { createRootRoute, createRoute, createRouter, createMemoryHistory, RouterProvider } from '@tanstack/react-router';
import { useMediaQuery } from 'react-responsive';
import { OrdersFilterMobileDialog, OrdersFilterOpened, Layout, OrdersFilterProvider, OrdersFilterDesktopDialog } from '@/components';
import { sidebarButtons, filters } from './data';
import { RouterWrapper, OutletComponent } from '../Wrapper';

const rootRoute = createRootRoute({
	component: function RootComponent() {
		const mobileView = useMediaQuery({ maxWidth: 360 });
		return mobileView ? (
			<OrdersFilterProvider>
				<OutletComponent />
			</OrdersFilterProvider>
		) : (
			<OrdersFilterProvider>
				<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
					<OrdersFilterOpened open dialog filters={filters} />
				</Layout>
				<OutletComponent />
			</OrdersFilterProvider>
		);
	},
});

const IndexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: function IndexComponent() {
		const mobileView = useMediaQuery({ maxWidth: 360 });
		return (
			mobileView && (
				<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
					<OrdersFilterOpened open dialog filters={filters} />
				</Layout>
			)
		);
	},
});

const DialogRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/dialog',
	component: function DialogComponent() {
		const mobileView = useMediaQuery({ maxWidth: 360 });
		return mobileView ? (
			<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
				<OrdersFilterMobileDialog />
			</Layout>
		) : (
			<OrdersFilterDesktopDialog />
		);
	},
});

const routeTree = rootRoute.addChildren([IndexRoute, DialogRoute]);

const memoryHistory = createMemoryHistory({
	initialEntries: ['/'],
});

const router = createRouter({ routeTree, history: memoryHistory });

<RouterWrapper router={router} />;
```

```jsx noeditor
import Image1 from './OrdersFilterOpenedWithDialogPage.png';
<img src={Image1} />;
```
