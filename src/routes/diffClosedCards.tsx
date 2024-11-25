import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import { DiffClosedCardsPage } from '@/templates/DiffClosedCardsPage/DiffClosedCardsPage';

export const diffClosedCardsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: 'diffClosedCardsPage',
	component: () => <DiffClosedCardsPage />,
});
