import React, { FC } from 'react';
import { styled } from 'styled-components';
import { HomePage } from '../templates/HomePage/HomePage';
import { OrderPage } from '../templates/OrderPage/OrderPage';
import { TimeWidgetsPage } from '../templates/TimeWidgetsPage/TimeWidgetsPage';
import { OrdersFilterOpenedPage } from '../templates/OrdersFilterOpenedPage/OrdersFilterOpenedPage';
import { OrdersFilterClosedPage } from '../templates/OrdersFilterClosedPage/OrdersFilterClosedPage';
import { OrderListPreviewPage } from '../templates/OrderListPreviewPage/OrderListPreviewPage';
import { DiffOpenedCardsPage } from '../templates/DiffOpenedCardsPage/DiffOpenedCardsPage';
import { DiffClosedCardsPage } from '../templates/DiffClosedCardsPage/DiffClosedCardsPage';
import { WelcomePage1 } from '../templates/WelcomePages/WelcomePage1/WelcomePage1';
import { WelcomePage2 } from '../templates/WelcomePages/WelcomePage2/WelcomePage2';
import { WelcomePage3 } from '../templates/WelcomePages/WelcomePage3/WelcomePage3';
import { WelcomePage4 } from '../templates/WelcomePages/WelcomePage4/WelcomePage4';
import { WelcomePage5 } from '../templates/WelcomePages/WelcomePage5/WelcomePage5';
import { WelcomePage6 } from '../templates/WelcomePages/WelcomePage6/WelcomePage6';
import { WelcomePage7 } from '../templates/WelcomePages/WelcomePage7/WelcomePage7';
import { WelcomePage8 } from '../templates/WelcomePages/WelcomePage8/WelcomePage8';
import { OrdersFilterOpenedWithDialogPage } from '../templates/OrdersFilterOpenedWithDialogPage/OrdersFilterOpenedWithDialogPage';
import { OrdersFilterClosedWithDialogPage } from '../templates/OrdersFilterClosedWithDialogPage/OrdersFilterClosedWithDialogPage';
import { DiffOpenedCardsWithDialogPage } from '../templates/DiffOpenedCardsWithDialogPage/DiffOpenedCardsWithDialogPage';
import { Outlet, createRootRoute, Link, createRoute, createRouter, RouterProvider } from '@tanstack/react-router';

const routes = [
	{ id: 1, name: 'HomePage', component: HomePage, path: '/homePage' },
	{ id: 2, name: 'OrderPage', component: OrderPage, path: '/orderPage' },
	{
		id: 3,
		name: 'TimeWidgetsPage',
		component: TimeWidgetsPage,
		path: '/timeWidgetsPage',
	},
	{
		id: 4,
		name: 'OrdersFilterOpenedPage',
		component: OrdersFilterOpenedPage,
		path: '/ordersFilterOpenedPage',
	},
	{
		id: 5,
		name: 'OrdersFilterClosedPage',
		component: OrdersFilterClosedPage,
		path: '/ordersFilterClosedPage',
	},
	{
		id: 6,
		name: 'OrderListPreviewPage',
		component: OrderListPreviewPage,
		path: '/orderListPreviewPage',
	},
	{
		id: 7,
		name: 'DiffOpenedCardsPage',
		component: DiffOpenedCardsPage,
		path: '/diffOpenedCardsPage',
	},
	{
		id: 8,
		name: 'DiffClosedCardsPage',
		component: DiffClosedCardsPage,
		path: '/diffClosedCardsPage',
	},
	{
		id: 9,
		name: 'WelcomePage1',
		component: WelcomePage1,
		path: '/welcomePage1',
	},
	{
		id: 10,
		name: 'WelcomePage2',
		component: WelcomePage2,
		path: '/welcomePage2',
	},
	{
		id: 11,
		name: 'WelcomePage3',
		component: WelcomePage3,
		path: '/welcomePage3',
	},
	{
		id: 12,
		name: 'WelcomePage4',
		component: WelcomePage4,
		path: '/welcomePage4',
	},
	{
		id: 13,
		name: 'WelcomePage5',
		component: WelcomePage5,
		path: '/welcomePage5',
	},
	{
		id: 14,
		name: 'WelcomePage6',
		component: WelcomePage6,
		path: '/welcomePage6',
	},
	{
		id: 15,
		name: 'WelcomePage7',
		component: WelcomePage7,
		path: '/welcomePage7',
	},
	{
		id: 16,
		name: 'WelcomePage8',
		component: WelcomePage8,
		path: '/welcomePage8',
	},
	{
		id: 17,
		name: 'OrdersFilterOpenedWithDialogPage',
		component: OrdersFilterOpenedWithDialogPage,
		path: '/ordersFilterOpenedWithDialogPage',
	},
	{
		id: 18,
		name: 'OrdersFilterClosedWithDialogPage',
		component: OrdersFilterClosedWithDialogPage,
		path: '/ordersFilterClosedWithDialogPage',
	},
	{
		id: 19,
		name: 'DiffOpenedCardsWithDialogPage',
		component: DiffOpenedCardsWithDialogPage,
		path: '/diffOpenedCardsWithDialogPage',
	},
];

const UlStyled = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	padding: 20px;
`;

const rootRoute = createRootRoute({
	component: () => <Outlet />,
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: () => (
		<div>
			<header>
				<UlStyled>
					{routes.map((route) => (
						<Link key={route.id} to={route.path}>
							{route.name}
						</Link>
					))}
				</UlStyled>
			</header>
			<hr />
		</div>
	),
});

const routeTree = rootRoute.addChildren([
	indexRoute,
	...routes.map((route) =>
		createRoute({
			getParentRoute: () => rootRoute,
			path: route.path,
			component: route.component,
		})
	),
]);

const router = createRouter({ routeTree });

export const AppRouter: FC = () => <RouterProvider router={router as any} />;
