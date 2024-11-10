import React, { FC } from 'react';
import { sidebarButtons, filters, data } from './data';
import { OrdersFilterProviderPrmt } from '@/primitives/OrdersFilterPrmt/OrdersFilterContextPrmt';
import { LayoutPrmt } from '@/primitives/LayoutPrmt/LayoutPrmt';
import { FooterPrmt } from '@/primitives/FooterPrmt/FooterPrmt';
import { OrdersFilterClosedPrmt } from '@/primitives/OrdersFilterPrmt/OrdersFilterClosedPrmt/OrdersFilterClosedPrmt';
import { OrderListPreviewContainerPrmt } from '@/primitives/OrderListPreviewPrmt/OrderListPreviewContainerPrmt/OrderListPreviewContainerPrmt';
import { OrderListContainerPrmt } from '@/primitives/OrderListPreviewPrmt/OrderListContainerPrmt/OrderListContainerPrmt';
import { OrderListItemPrmt } from '@/primitives/OrderListPreviewPrmt/OrderListContainerPrmt/OrderListItemPrmt/OrderListItemPrmt';
import { OrderPrmt } from '@/primitives/OrderListPreviewPrmt/OrderPrmt/OrderPrmt';
import { PaginationPrmt as OrdersPaginationPrmt } from '@/primitives/PaginationPrmt/PaginationPrmt';
import { RowPrmt } from '@/primitives/RowPrmt/RowPrmt';
import { ColPrmt } from '@/primitives/ColPrmt/ColPrmt';

export const DiffClosedCardsPage: FC = () => (
	<OrdersFilterProviderPrmt>
		<LayoutPrmt buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }} footer={<FooterPrmt />}>
			<RowPrmt gutter={[16, 16]}>
				<ColPrmt span={12}>
					<OrdersFilterClosedPrmt open={false} dialog={false} filters={filters} />
					<OrderListPreviewContainerPrmt>
						<ColPrmt span={12}>
							<OrderListContainerPrmt>
								<OrderListItemPrmt key={data[0].id} data={data[0]} />
								<OrderListItemPrmt key={data[1].id} data={data[1]} />
								<OrderListItemPrmt key={data[2].id} data={data[2]} />
								<OrderListItemPrmt key={data[3].id} data={data[3]} />
								<OrderListItemPrmt key={data[4].id} data={data[4]} />
								<OrderListItemPrmt key={data[5].id} data={data[5]} />
								<OrderListItemPrmt key={data[6].id} data={null} />
							</OrderListContainerPrmt>
							<OrdersPaginationPrmt defaultCurrent={1} total={50} />
						</ColPrmt>
						<ColPrmt span={12}>
							<OrderPrmt />
						</ColPrmt>
					</OrderListPreviewContainerPrmt>
				</ColPrmt>
				<ColPrmt span={12}>
					<OrdersFilterClosedPrmt open={false} dialog={false} filters={filters} />
					<OrderListPreviewContainerPrmt>
						<ColPrmt span={12}>
							<OrderListContainerPrmt>
								<OrderListItemPrmt key={data[0].id} data={data[0]} />
								<OrderListItemPrmt key={data[1].id} data={data[1]} />
								<OrderListItemPrmt key={data[2].id} data={data[2]} />
								<OrderListItemPrmt key={data[3].id} data={data[3]} />
								<OrderListItemPrmt key={data[4].id} data={data[4]} />
								<OrderListItemPrmt key={data[5].id} data={data[5]} />
								<OrderListItemPrmt key={data[6].id} data={null} />
							</OrderListContainerPrmt>
							<OrdersPaginationPrmt defaultCurrent={1} total={50} />
						</ColPrmt>
						<ColPrmt span={12}>
							<OrderPrmt />
						</ColPrmt>
					</OrderListPreviewContainerPrmt>
				</ColPrmt>
			</RowPrmt>
		</LayoutPrmt>
	</OrdersFilterProviderPrmt>
);
