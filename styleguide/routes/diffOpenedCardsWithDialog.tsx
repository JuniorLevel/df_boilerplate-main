/* eslint-disable eslint-restrict-imports/restrict-imports */
import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './index';
import { DiffOpenedCardsWithDialogPage } from '@/templates/DiffOpenedCardsWithDialogPage/DiffOpenedCardsWithDialogPage';
import { OrdersFilterDesktopDialogPrmt } from '@/primitives/OrdersFilterPrmt/OrdersFilterDialogsPrmt/OrdersFilterDesktopDialogPrmt/OrdersFilterDesktopDialogPrmt';

export const diffOpenedCardsWithDialogRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: 'diffOpenedCardsWithDialogPage',
	component: () => <DiffOpenedCardsWithDialogPage />,
});

export const diffOpenedCardsDialogRoute = createRoute({
	getParentRoute: () => diffOpenedCardsWithDialogRoute,
	path: 'dialog',
	component: () => <OrdersFilterDesktopDialogPrmt />,
});
