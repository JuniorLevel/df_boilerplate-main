/* eslint-disable eslint-restrict-imports/restrict-imports */
import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './index';
import { OrdersFilterClosedWithDialogPage } from '@/templates/OrdersFilterClosedWithDialogPage/OrdersFilterClosedWithDialogPage';
import { OrdersFilterDesktopDialogPrmt } from '@/primitives/OrdersFilterPrmt/OrdersFilterDialogsPrmt/OrdersFilterDesktopDialogPrmt/OrdersFilterDesktopDialogPrmt';

export const ordersFilterClosedWithDialogRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: 'ordersFilterClosedWithDialogPage',
	component: () => <OrdersFilterClosedWithDialogPage />,
});

export const ordersFilterClosedDialogRoute = createRoute({
	getParentRoute: () => ordersFilterClosedWithDialogRoute,
	path: 'dialog',
	component: () => <OrdersFilterDesktopDialogPrmt />,
});
