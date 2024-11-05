import React, { FC } from 'react';
import { filters, sidebarButtons } from './data';
import { Layout } from '@/primitives/Layout/Layout';
import { OrdersFilterProvider } from '@/tmp/OrdersFilter/OrdersFilterContext';
import { OrdersFilterOpened } from '@/tmp/OrdersFilter/OrdersFilterOpened/OrdersFilterOpened';

export const OrdersFilterOpenedPage: FC = () => (
	<OrdersFilterProvider>
		<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
			<OrdersFilterOpened open dialog={false} filters={filters} />
		</Layout>
	</OrdersFilterProvider>
);
