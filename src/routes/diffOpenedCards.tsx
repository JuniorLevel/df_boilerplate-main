import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import { DiffOpenedCardsPage } from '@/templates/DiffOpenedCardsPage/DiffOpenedCardsPage';

export const diffOpenedCardsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: 'diffOpenedCardsPage',
	component: () => <DiffOpenedCardsPage />,
});
