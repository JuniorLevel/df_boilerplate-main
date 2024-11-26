import React from 'react';
import { styled } from 'styled-components';
import { routesData } from './routes.data';
import { createRootRoute, createRoute, Link } from '@tanstack/react-router';

const UlStyled = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	padding: 20px;
`;

export const rootRoute = createRootRoute();

export const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: () => (
		<div>
			<header>
				<UlStyled>
					{routesData.map((route) => (
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
