import React, { FC } from 'react';
import { Outlet } from '@tanstack/react-router';
import { sidebarButtons, data, filters } from './data';
import { OrdersFilterProviderPrmt } from '@/primitives/OrdersFilterPrmt/OrdersFilterContextPrmt';
import { OrderListPreviewContainerPrmt } from '@/primitives/OrderListPreviewPrmt/OrderListPreviewContainerPrmt/OrderListPreviewContainerPrmt';
import { OrdersFilterClosedPrmt } from '@/primitives/OrdersFilterPrmt/OrdersFilterClosedPrmt/OrdersFilterClosedPrmt';
import { LayoutPrmt } from '@/primitives/LayoutPrmt/LayoutPrmt';
import { OrderListContainerPrmt } from '@/primitives/OrderListPreviewPrmt/OrderListContainerPrmt/OrderListContainerPrmt';
import { OrderListItemPrmt } from '@/primitives/OrderListPreviewPrmt/OrderListContainerPrmt/OrderListItemPrmt/OrderListItemPrmt';
import { OrderPrmt } from '@/primitives/OrderListPreviewPrmt/OrderPrmt/OrderPrmt';
import { ColPrmt } from '@/primitives/ColPrmt/ColPrmt';
import { PaginationPrmt as OrdersPaginationPrmt } from '@/primitives/PaginationPrmt/PaginationPrmt';

export const OrdersFilterClosedWithDialogPage: FC = () => (
	<OrdersFilterProviderPrmt>
		<LayoutPrmt buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
			<OrdersFilterClosedPrmt open={false} dialog filters={filters} />
			<OrderListPreviewContainerPrmt>
				<ColPrmt span={12}>
					<OrderListContainerPrmt>
						<OrderListItemPrmt key={data[0].id} data={data[0]} />
						<OrderListItemPrmt key={data[1].id} data={data[1]} />
						<OrderListItemPrmt key={data[2].id} data={data[2]} />
						<OrderListItemPrmt key={data[3].id} data={data[3]} />
						<OrderListItemPrmt key={data[4].id} data={data[4]} />
					</OrderListContainerPrmt>
					<OrdersPaginationPrmt defaultCurrent={1} total={50} />
				</ColPrmt>
				<ColPrmt span={12}>
					<OrderPrmt />
				</ColPrmt>
			</OrderListPreviewContainerPrmt>
		</LayoutPrmt>
		<Outlet />
	</OrdersFilterProviderPrmt>
);
