import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import { OrdersFilterOpenedWithDialogPage } from '@/templates/OrdersFilterOpenedWithDialogPage/OrdersFilterOpenedWithDialogPage';

export const ordersFilterOpenedWithDialogRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: 'ordersFilterOpenedWithDialogPage',
	component: () => <OrdersFilterOpenedWithDialogPage />,
});
