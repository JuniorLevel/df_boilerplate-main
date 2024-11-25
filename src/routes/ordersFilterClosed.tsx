import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import { OrdersFilterClosedPage } from '@/templates/OrdersFilterClosedPage/OrdersFilterClosedPage';

export const ordersFilterClosedRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: 'ordersFilterClosedPage',
	component: () => <OrdersFilterClosedPage />,
});
