import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './index';
import { WelcomePage6 } from '@/templates/WelcomePages/WelcomePage6/WelcomePage6';

export const welcomePage6Route = createRoute({
	getParentRoute: () => rootRoute,
	path: 'welcomePage6',
	component: () => <WelcomePage6 />,
});
