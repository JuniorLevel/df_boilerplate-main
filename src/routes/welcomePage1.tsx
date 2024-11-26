import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './index';
import { WelcomePage1 } from '@/templates/WelcomePages/WelcomePage1/WelcomePage1';

export const welcomePage1Route = createRoute({
	getParentRoute: () => rootRoute,
	path: 'welcomePage1',
	component: () => <WelcomePage1 />,
});
