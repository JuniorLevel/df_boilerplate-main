import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import { WelcomePage2 } from '@/templates/WelcomePages/WelcomePage2/WelcomePage2';

export const welcomePage2Route = createRoute({
	getParentRoute: () => rootRoute,
	path: 'welcomePage2',
	component: () => <WelcomePage2 />,
});
