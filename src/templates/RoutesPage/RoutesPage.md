```jsx
import { useNavigate, createRootRoute, createRoute, createRouter, createMemoryHistory, RouterProvider } from '@tanstack/react-router';
import React from 'react';
import { RouterWrapper } from '../Wrapper';
import { RoutesPage } from './RoutesPage';

const NavigationButtons = ({ navigate }) => (
	<>
		<button type="button" onClick={() => navigate({ to: '/' })}>
			Home
		</button>
		<button type="button" onClick={() => navigate({ to: '/about' })}>
			About
		</button>
		<button type="button" onClick={() => navigate({ to: '/dashboard' })}>
			Dashboard
		</button>
	</>
);

const rootRoute = createRootRoute({
	component: () => (
		<RoutesPage>
			<NavigationButtons />
		</RoutesPage>
	),
});

const HomeRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: () => <div>Home</div>,
});

const AboutRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/about',
	component: () => <div>About</div>,
});

const DashboardRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/dashboard',
	component: () => <div>Dashboard</div>,
});

const routeTree = rootRoute.addChildren([HomeRoute, AboutRoute, DashboardRoute]);

const memoryHistory = createMemoryHistory({
	initialEntries: ['/'],
});

const router = createRouter({ routeTree, history: memoryHistory });

<RouterWrapper router={router} />;
```
