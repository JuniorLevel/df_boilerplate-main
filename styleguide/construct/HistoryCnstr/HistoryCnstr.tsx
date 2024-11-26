import { ColPrmt } from '@/primitives/ColPrmt/ColPrmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import { OrderContainerPrmt } from '@/primitives/OrderTabsPrmt/OrderContainerPrmt/OrderContainerPrmt';
import { OrderPreviewPrmt } from '@/primitives/OrderTabsPrmt/OrderPreviewPrmt/OrderPreviewPrmt';
import { OrderVersionPrmt } from '@/primitives/OrderTabsPrmt/OrderVersionPrmt/OrderVersionPrmt';
import { RowPrmt } from '@/primitives/RowPrmt/RowPrmt';
import { filters } from '@/templates/OrderPage/data';
import React, { FC } from 'react';

export const HistoryCnstr: FC = () => {
	return (
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
							<FlexPrmt justify="end">
								<OrderVersionPrmt filters={filters} />
							</FlexPrmt>
						</ColPrmt>
					</RowPrmt>
				</ColPrmt>
			</RowPrmt>
		</OrderContainerPrmt>
	);
};
