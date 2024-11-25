import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import { OrdersFilterClosedWithDialogPage } from '@/templates/OrdersFilterClosedWithDialogPage/OrdersFilterClosedWithDialogPage';

export const ordersFilterClosedWithDialogRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: 'ordersFilterClosedWithDialogPage',
	component: () => <OrdersFilterClosedWithDialogPage />,
});
