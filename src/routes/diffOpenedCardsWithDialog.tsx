import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import { DiffOpenedCardsWithDialogPage } from '@/templates/DiffOpenedCardsWithDialogPage/DiffOpenedCardsWithDialogPage';

export const diffOpenedCardsWithDialogRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: 'diffOpenedCardsWithDialogPage',
	component: () => <DiffOpenedCardsWithDialogPage />,
});
