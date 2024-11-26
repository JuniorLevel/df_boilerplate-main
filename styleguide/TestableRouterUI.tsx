import { createRootRoute, createRoute, createRouter, RouterProvider } from '@tanstack/react-router';
import { PropsWithChildren, useMemo } from 'react';

export const TestableRouterUI = (props: PropsWithChildren) => {
	const rootRoute = createRootRoute({
		component: () => props.children,
	});

	const router = useMemo(
		() =>
			createRouter({
				routeTree: rootRoute.addChildren([
					createRoute({
						path: '*',
						component: () => props.children,
						getParentRoute: () => rootRoute,
					}),
				]),
			}),
		[props.children, rootRoute]
	);

	return <RouterProvider router={router as any} />;
};
