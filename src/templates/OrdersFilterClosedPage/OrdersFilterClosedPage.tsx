import React, { FC } from 'react';
import { data, filters, sidebarButtons } from './data';
import { LayoutPrmt } from '@/primitives/LayoutPrmt/LayoutPrmt';
import { OrdersFilterProviderPrmt } from '@/primitives/OrdersFilterPrmt/OrdersFilterContextPrmt';
import { OrdersFilterClosedPrmt } from '@/primitives/OrdersFilterPrmt/OrdersFilterClosedPrmt/OrdersFilterClosedPrmt';
import { FiltersSearchListContainerPrmt } from '@/primitives/FiltersSearchListPrmt/FiltersSearchListContainerPrmt/FiltersSearchListContainerPrmt';
import { FiltersSearchListItemPrmt } from '@/primitives/FiltersSearchListPrmt/FiltersSearchListItemPrmt/FiltersSearchListItemPrmt';

export const OrdersFilterClosedPage: FC = () => (
	<OrdersFilterProviderPrmt>
		<LayoutPrmt buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
			<OrdersFilterClosedPrmt open={false} dialog={false} filters={filters} />
			<FiltersSearchListContainerPrmt>
				<FiltersSearchListItemPrmt key={data[0].id} listData={data[0]} />
				<FiltersSearchListItemPrmt key={data[1].id} listData={data[1]} />
				<FiltersSearchListItemPrmt key={data[2].id} listData={data[2]} />
				<FiltersSearchListItemPrmt key={data[3].id} listData={data[3]} />
				<FiltersSearchListItemPrmt key={data[4].id} listData={data[4]} />
				<FiltersSearchListItemPrmt key={6} listData={null} />
			</FiltersSearchListContainerPrmt>
		</LayoutPrmt>
	</OrdersFilterProviderPrmt>
);
