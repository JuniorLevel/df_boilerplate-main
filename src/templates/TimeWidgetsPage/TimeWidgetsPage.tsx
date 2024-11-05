import React, { FC } from 'react';
import { sidebarButtons } from './data';
import { Layout } from '@/primitives/Layout/Layout';
import { TimeWidgetsPanel } from '@/primitives/TimeWidgetsPanel/TimeWidgetsPanel';

export const TimeWidgetsPage: FC = () => (
	<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
		<TimeWidgetsPanel />
	</Layout>
);
