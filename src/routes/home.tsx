import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import { HomePage } from '@/templates/HomePage/HomePage';

export const homeRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: 'homePage',
	component: () => <HomePage />,
});
