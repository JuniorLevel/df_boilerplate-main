import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import { OrdersFilterOpenedPage } from '@/templates/OrdersFilterOpenedPage/OrdersFilterOpenedPage';

export const ordersFilterOpenedRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: 'ordersFilterOpenedPage',
	component: () => <OrdersFilterOpenedPage />,
});
