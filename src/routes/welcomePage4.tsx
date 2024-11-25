import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import { WelcomePage4 } from '@/templates/WelcomePages/WelcomePage4/WelcomePage4';

export const welcomePage4Route = createRoute({
	getParentRoute: () => rootRoute,
	path: 'welcomePage4',
	component: () => <WelcomePage4 />,
});
