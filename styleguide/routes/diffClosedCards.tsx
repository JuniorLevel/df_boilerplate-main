import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { DiffClosedCardsPage } from '@/templates/DiffClosedCardsPage/DiffClosedCardsPage';
import { rootRoute } from './index';

export const diffClosedCardsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: 'diffClosedCardsPage',
	component: () => <DiffClosedCardsPage />,
});
