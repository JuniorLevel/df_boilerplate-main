import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './index';
import { WelcomePage3 } from '@/templates/WelcomePages/WelcomePage3/WelcomePage3';

export const welcomePage3Route = createRoute({
	getParentRoute: () => rootRoute,
	path: 'welcomePage3',
	component: () => <WelcomePage3 />,
});
