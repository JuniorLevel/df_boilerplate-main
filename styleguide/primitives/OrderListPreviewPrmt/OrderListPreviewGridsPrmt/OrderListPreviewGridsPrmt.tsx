import React, { FC } from 'react';
import { Col } from 'antd';
import { FiltersSearchListItemMobileInfoStatusPrmt } from '@/primitives/FiltersSearchListPrmt/FiltersSearchListItemPrmt/FiltersSearchListItemMobilePrmt/FiltersSearchListItemMobileInfoStatusPrmt/FiltersSearchListItemMobileInfoStatusPrmt';
import { StatusContainerPrmt } from '@/primitives/OrdersFilterPrmt/StatusContainerPrmt/StatusContainerPrmt';

interface IOrderListPreviewGridsPrmtProps {
	data: any;
}

export const OrderListPreviewGridsPrmt: FC<IOrderListPreviewGridsPrmtProps> = ({ data }) => (
	<>
		{data.dataSearch.map((item: any) => (
			<Col span={24} key={item.id}>
				<StatusContainerPrmt>
					<FiltersSearchListItemMobileInfoStatusPrmt key={item.id} item={item} />
				</StatusContainerPrmt>
			</Col>
		))}
	</>
);
