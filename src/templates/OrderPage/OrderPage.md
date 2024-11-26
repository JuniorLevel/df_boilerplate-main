```tsx
import React, { FC } from 'react';
import { sidebarButtons } from './data';
import { OrderTabsPrmt } from '@/primitives/OrderTabsPrmt/OrderTabsPrmt';
import { LayoutPrmt } from '@/primitives/LayoutPrmt/LayoutPrmt';
import { BadgePrmt } from '@/primitives/BadgePrmt/BadgePrmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import { Link, createRootRoute, createRoute, createMemoryHistory, createRouter } from '@tanstack/react-router';
import {StyleguidistRouterWrapper, OutletComponent} from '../../StyleguidistWrapper';
import {OrderPage} from './OrderPage';
import {HistoryPage} from '../../pages/HistoryPage/HistoryPage'
import {TaskPage} from '../../pages/TaskPage/TaskPage'

const rootRoute = createRootRoute();

const indexRoute = createRoute({getParentRoute: () => rootRoute, path: '/', component: () => <OrderPage/>})

const orderRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: 'orderPage',
	component: () => <OrderPage/>,
});

const orderMainRoute = createRoute({
	getParentRoute: () => orderRoute,
	path: 'main',
	component: () => <TaskPage />,
});

const orderHistoryRoute = createRoute({
	getParentRoute: () => orderRoute,
	path: 'history',
	component: () => <HistoryPage />,
});

const orderChatRoute = createRoute({
	getParentRoute: () => orderRoute,
	path: 'chat',
	component: () => <div>Order chat</div>,
});

const orderDashboardRoute = createRoute({
	getParentRoute: () => orderRoute,
	path: 'dashboard',
	component: () => <div>Order dashboard</div>,
});

const orderDocumentsRoute = createRoute({
	getParentRoute: () => orderRoute,
	path: 'documents',
	component: () => <div>Order documents</div>,
});

const routeTree = rootRoute.addChildren([indexRoute, orderRoute.addChildren([orderMainRoute, orderHistoryRoute, orderChatRoute, orderDashboardRoute, orderDocumentsRoute])]);

const memoryHistory = createMemoryHistory({
	initialEntries: ['/'],
});

const router = createRouter({ routeTree, history: memoryHistory });

<StyleguidistRouterWrapper router={router} />;

```

Design view of component

```tsx
import Image from './order.png';

<img src={Image} alt="image"/>
```
