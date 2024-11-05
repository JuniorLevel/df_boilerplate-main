import React, { FC, ReactNode } from 'react';
import { useNavigate, useRouter, RouterProvider, createRootRoute, createRoute, createMemoryHistory, createRouter, Outlet } from '@tanstack/react-router';

export const NavigateButton: FC = () => {
	const navigate = useNavigate();

	return (
		<button type="button" onClick={() => navigate({ to: '/dialog' })}>
			Show mobile dialog
		</button>
	);
};

export const GoToBackButton: FC = () => {
	const { history } = useRouter();
	return (
		<button type="button" onClick={() => history.go(-1)}>
			Go back
		</button>
	);
};

interface IParentComponentProps {
	children: ReactNode;
}

export const ParentComponent: FC<IParentComponentProps> = ({ children }) => (
	<>
		{children}
		<NavigateButton />
	</>
);

interface IDialogComponentProps {
	children: ReactNode;
}

export const DialogComponent: FC<IDialogComponentProps> = ({ children }) => (
	<>
		{children}
		<GoToBackButton />
	</>
);

type TViewMode = 'mobile' | 'desktop';

interface ICommonRoutingComponentProps {
	children: ReactNode;
	viewMode: TViewMode;
}

export const CommonRoutingComponent: FC<ICommonRoutingComponentProps> = ({ children, viewMode }: ICommonRoutingComponentProps) => {
	const rootRoute = createRootRoute({
		component: () => (
			<div>
				{viewMode === 'mobile' ? (
					<Outlet />
				) : (
					<>
						{children}
						<Outlet />
					</>
				)}
			</div>
		),
	});

	const IndexRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/',
		component: () => (viewMode === 'mobile' ? children : <div />),
	});

	const DialogRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/dialog',
		component: () =>
			viewMode === 'mobile' ? (
				<DialogComponent>
					<p>mobile dialog</p>
				</DialogComponent>
			) : (
				<DialogComponent>
					<p>dialog window</p>
				</DialogComponent>
			),
	});
	const routeTree = rootRoute.addChildren([IndexRoute, DialogRoute]);

	const memoryHistory = createMemoryHistory({
		initialEntries: ['/'],
	});

	const router = createRouter({ routeTree, history: memoryHistory });
	return <RouterProvider router={router} />;
};
