/* eslint-disable eslint-import/no-default-export */
import React, { FC, ReactNode } from 'react';
import { RouterProvider, Outlet } from '@tanstack/react-router';
import { useErrorBoundary, ErrorBoundary } from 'react-error-boundary';
import { ThemeWrapper } from './primitives/ThemeWrapper/ThemeWrapper';

export const Fallback: FC = () => {
	const { resetBoundary } = useErrorBoundary();

	return (
		<div>
			<p>Не меняйте данный props на этой странице, так как здесь нет контекста роутинга!</p>
			<button type="button" onClick={resetBoundary}>
				Обновить страницу
			</button>
		</div>
	);
};

interface IStyleguidistWrapperProps {
	children: ReactNode;
}

const StyleguidistWrapper: FC<IStyleguidistWrapperProps> = ({ children }) => (
	<ErrorBoundary
		fallback={<Fallback />}
		onReset={() => {
			window.location.reload();
		}}
	>
		<ThemeWrapper>{children}</ThemeWrapper>
	</ErrorBoundary>
);

export default StyleguidistWrapper;

interface IStyleguidistRouterWrapperProps {
	router: any;
}

export const StyleguidistRouterWrapper: FC<IStyleguidistRouterWrapperProps> = ({ router }) => <RouterProvider router={router} />;

export const OutletComponent: FC = () => <Outlet />;
