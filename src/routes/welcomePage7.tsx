import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import { WelcomePage7 } from '@/templates/WelcomePages/WelcomePage7/WelcomePage7';

export const welcomePage7Route = createRoute({
	getParentRoute: () => rootRoute,
	path: 'welcomePage7',
	component: () => <WelcomePage7 />,
});
