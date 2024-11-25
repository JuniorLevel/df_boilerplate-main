import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import { WelcomePage8 } from '@/templates/WelcomePages/WelcomePage8/WelcomePage8';

export const welcomePage8Route = createRoute({
	getParentRoute: () => rootRoute,
	path: 'welcomePage8',
	component: () => <WelcomePage8 />,
});
