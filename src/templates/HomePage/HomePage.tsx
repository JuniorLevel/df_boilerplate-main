import React, { FC } from 'react';
import { sidebarButtons } from './data';
import { Layout } from '@/primitives/Layout/Layout';

export const HomePage: FC = () => (
	<Layout title="Caption" buttons={sidebarButtons} theme="light" avatar={{ title: 'AV' }}>
		<div />
	</Layout>
);
