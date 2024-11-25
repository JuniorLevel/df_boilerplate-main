import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import { WelcomePage5 } from '@/templates/WelcomePages/WelcomePage5/WelcomePage5';

export const welcomePage5Route = createRoute({
	getParentRoute: () => rootRoute,
	path: 'welcomePage5',
	component: () => <WelcomePage5 />,
});
