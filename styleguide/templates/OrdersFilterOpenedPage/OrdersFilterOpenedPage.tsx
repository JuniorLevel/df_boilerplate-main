import React, { FC } from 'react';
import { filters, sidebarButtons } from './data';
import { LayoutPrmt } from '@/primitives/LayoutPrmt/LayoutPrmt';
import { OrdersFilterProviderPrmt } from '@/primitives/OrdersFilterPrmt/OrdersFilterContextPrmt';
import { OrdersFilterOpenedPrmt } from '@/primitives/OrdersFilterPrmt/OrdersFilterOpenedPrmt/OrdersFilterOpenedPrmt';

export const OrdersFilterOpenedPage: FC = () => (
	<OrdersFilterProviderPrmt>
		<LayoutPrmt buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
			<OrdersFilterOpenedPrmt open dialog={false} filters={filters} />
		</LayoutPrmt>
	</OrdersFilterProviderPrmt>
);
