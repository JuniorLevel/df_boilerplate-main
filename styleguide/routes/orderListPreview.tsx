import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './index';
import { OrderListPreviewPage } from '@/templates/OrderListPreviewPage/OrderListPreviewPage';

export const orderListPreviewRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: 'orderListPreviewPage',
	component: () => <OrderListPreviewPage />,
});
