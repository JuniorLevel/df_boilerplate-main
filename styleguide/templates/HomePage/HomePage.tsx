import React, { FC } from 'react';
import { sidebarButtons } from './data';
import { LayoutPrmt } from '@/primitives/LayoutPrmt/LayoutPrmt';

export const HomePage: FC = () => (
	<LayoutPrmt title="Caption" buttons={sidebarButtons} theme="light" avatar={{ title: 'AV' }}>
		<div />
	</LayoutPrmt>
);
