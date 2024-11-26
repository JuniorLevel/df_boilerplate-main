import { createRoute } from '@tanstack/react-router';
import { OrderPage } from '@/templates/OrderPage/OrderPage';
import { TaskPage } from '@/pages/TaskPage/TaskPage';
import { HistoryPage } from '@/pages/HistoryPage/HistoryPage';
import { rootRoute } from './index';

export const orderRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: 'orderPage',
	component: () => <OrderPage />,
});

export const orderMainRoute = createRoute({
	getParentRoute: () => orderRoute,
	path: 'main',
	component: () => <TaskPage />,
});

export const orderHistoryRoute = createRoute({
	getParentRoute: () => orderRoute,
	path: 'history',
	component: () => <HistoryPage />,
});

export const orderChatRoute = createRoute({
	getParentRoute: () => orderRoute,
	path: 'chat',
	component: () => <div>Order chat</div>,
});

export const orderDashboardRoute = createRoute({
	getParentRoute: () => orderRoute,
	path: 'dashboard',
	component: () => <div>Order dashboard</div>,
});

export const orderDocumentsRoute = createRoute({
	getParentRoute: () => orderRoute,
	path: 'documents',
	component: () => <div>Order documents</div>,
});
