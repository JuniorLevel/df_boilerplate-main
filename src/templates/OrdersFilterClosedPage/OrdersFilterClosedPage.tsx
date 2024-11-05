import React, { FC } from 'react';
import { data, filters, sidebarButtons } from './data';
import { Layout } from '@/primitives/Layout/Layout';
import { OrdersFilterProvider } from '@/tmp/OrdersFilter/OrdersFilterContext';
import { OrdersFilterClosed } from '@/tmp/OrdersFilter/OrdersFilterClosed/OrdersFilterClosed';
import { FiltersSearchListContainer } from '@/primitives/FiltersSearchList/FiltersSearchListContainer/FiltersSearchListContainer';
import { FiltersSearchListItem } from '@/primitives/FiltersSearchList/FiltersSearchListItem/FiltersSearchListItem';

export const OrdersFilterClosedPage: FC = () => (
	<OrdersFilterProvider>
		<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
			<OrdersFilterClosed open={false} dialog={false} filters={filters} />
			<FiltersSearchListContainer>
				<FiltersSearchListItem key={data[0].id} listData={data[0]} />
				<FiltersSearchListItem key={data[1].id} listData={data[1]} />
				<FiltersSearchListItem key={data[2].id} listData={data[2]} />
				<FiltersSearchListItem key={data[3].id} listData={data[3]} />
				<FiltersSearchListItem key={data[4].id} listData={data[4]} />
				<FiltersSearchListItem key={6} listData={null} />
			</FiltersSearchListContainer>
		</Layout>
	</OrdersFilterProvider>
);
