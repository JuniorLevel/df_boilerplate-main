import React, { FC } from 'react';
import { Outlet } from '@tanstack/react-router';
import { sidebarButtons, data, filters } from './data';
import { OrdersFilterProviderPrmt } from '@/primitives/OrdersFilterPrmt/OrdersFilterContextPrmt';
import { LayoutPrmt } from '@/primitives/LayoutPrmt/LayoutPrmt';
import { FooterPrmt } from '@/primitives/FooterPrmt/FooterPrmt';
import { OrdersFilterOpenedPrmt } from '@/primitives/OrdersFilterPrmt/OrdersFilterOpenedPrmt/OrdersFilterOpenedPrmt';
import { OrderListPreviewContainerPrmt } from '@/primitives/OrderListPreviewPrmt/OrderListPreviewContainerPrmt/OrderListPreviewContainerPrmt';
import { OrderListDiffContainerPrmt } from '@/primitives/OrderListPreviewPrmt/OrderListDiffContainerPrmt/OrderListDiffContainerPrmt';
import { OrderListItemPrmt } from '@/primitives/OrderListPreviewPrmt/OrderListContainerPrmt/OrderListItemPrmt/OrderListItemPrmt';
import { OrderPrmt } from '@/primitives/OrderListPreviewPrmt/OrderPrmt/OrderPrmt';
import { RowPrmt } from '@/primitives/RowPrmt/RowPrmt';
import { ColPrmt } from '@/primitives/ColPrmt/ColPrmt';
import { PaginationPrmt as OrdersPaginationPrmt } from '@/primitives/PaginationPrmt/PaginationPrmt';

export const DiffOpenedCardsWithDialogPage: FC = () => (
	<OrdersFilterProviderPrmt>
		<LayoutPrmt buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }} footer={<FooterPrmt />}>
			<RowPrmt gutter={[16, 16]}>
				<ColPrmt span={12}>
					<OrdersFilterOpenedPrmt open dialog filters={filters} />
					<OrderListPreviewContainerPrmt>
						<ColPrmt span={12}>
							<OrderListDiffContainerPrmt>
								<OrderListItemPrmt key={data[0].id} data={data[0]} />
								<OrderListItemPrmt key={data[1].id} data={data[1]} />
								<OrderListItemPrmt key={data[2].id} data={data[2]} />
								<OrderListItemPrmt key={data[3].id} data={data[3]} />
								<OrderListItemPrmt key={data[4].id} data={data[4]} />
								<OrderListItemPrmt key={data[5].id} data={data[5]} />
								<OrderListItemPrmt key={data[6].id} data={null} />
							</OrderListDiffContainerPrmt>
							<OrdersPaginationPrmt defaultCurrent={1} total={50} />
						</ColPrmt>
						<ColPrmt span={12}>
							<OrderPrmt />
						</ColPrmt>
					</OrderListPreviewContainerPrmt>
				</ColPrmt>
				<ColPrmt span={12}>
					<OrdersFilterOpenedPrmt open dialog filters={filters} />
					<OrderListPreviewContainerPrmt>
						<ColPrmt span={12}>
							<OrderListDiffContainerPrmt>
								<OrderListItemPrmt key={data[0].id} data={data[0]} />
								<OrderListItemPrmt key={data[1].id} data={data[1]} />
								<OrderListItemPrmt key={data[2].id} data={data[2]} />
								<OrderListItemPrmt key={data[3].id} data={data[3]} />
								<OrderListItemPrmt key={data[4].id} data={data[4]} />
								<OrderListItemPrmt key={data[5].id} data={data[5]} />
								<OrderListItemPrmt key={data[6].id} data={null} />
							</OrderListDiffContainerPrmt>
							<OrdersPaginationPrmt defaultCurrent={1} total={50} />
						</ColPrmt>
						<ColPrmt span={12}>
							<OrderPrmt />
						</ColPrmt>
					</OrderListPreviewContainerPrmt>
				</ColPrmt>
			</RowPrmt>
		</LayoutPrmt>
		<Outlet />
	</OrdersFilterProviderPrmt>
);
