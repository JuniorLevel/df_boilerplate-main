import React from 'react';
import { styled } from 'styled-components';
import { routesData } from './routes.data';
import { createRoute, Link } from '@tanstack/react-router';
import { rootRoute } from './root';

const UlStyled = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	padding: 20px;
`;

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
