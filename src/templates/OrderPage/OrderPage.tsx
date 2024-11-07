import React, { FC } from 'react';
import { filters, items, sidebarButtons } from './data';
import { OrderTabsPrmt } from '@/primitives/OrderTabsPrmt/OrderTabsPrmt';
import { LayoutPrmt } from '@/primitives/LayoutPrmt/LayoutPrmt';
import { OrderContainerPrmt } from '@/primitives/OrderTabsPrmt/OrderContainerPrmt/OrderContainerPrmt';
import { OrderVersionPrmt } from '@/primitives/OrderTabsPrmt/OrderVersionPrmt/OrderVersionPrmt';
import { OrderPreviewPrmt } from '@/primitives/OrderTabsPrmt/OrderPreviewPrmt/OrderPreviewPrmt';
import { BadgePrmt } from '@/primitives/BadgePrmt/BadgePrmt';
import { RowPrmt } from '@/primitives/RowPrmt/RowPrmt';
import { ColPrmt } from '@/primitives/ColPrmt/ColPrmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';

export const OrderPage: FC = () => (
	<LayoutPrmt buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
		<OrderTabsPrmt
			items={[
				...items,
				{
					key: 5,
					label: (
						<FlexPrmt gap={10} align="center">
							<div>History</div>
							<BadgePrmt count={3} />
						</FlexPrmt>
					),
					children: (
						<OrderContainerPrmt>
							<RowPrmt gutter={[16, 16]}>
								<ColPrmt xs={12}>
									<RowPrmt gutter={[16, 16]}>
										<ColPrmt xs={12}>
											<OrderVersionPrmt filters={filters} />
										</ColPrmt>
										<ColPrmt xs={12}>
											<OrderPreviewPrmt />
										</ColPrmt>
									</RowPrmt>
								</ColPrmt>

								<ColPrmt xs={12}>
									<RowPrmt gutter={[16, 16]}>
										<ColPrmt xs={12}>
											<OrderPreviewPrmt />
										</ColPrmt>
										<ColPrmt xs={12}>
											<OrderVersionPrmt filters={filters} />
										</ColPrmt>
									</RowPrmt>
								</ColPrmt>
							</RowPrmt>
						</OrderContainerPrmt>
					),
				},
			]}
		/>
	</LayoutPrmt>
);
