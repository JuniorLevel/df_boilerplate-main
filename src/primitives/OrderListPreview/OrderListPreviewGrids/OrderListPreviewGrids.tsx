import React, { FC } from 'react';
import { Col } from 'antd';
import { StatusContainer } from '@/tmp/OrdersFilter/StatusContainer/StatusContainer';
import { FiltersSearchListItemMobileInfoStatus } from '@/primitives/FiltersSearchList/FiltersSearchListItem/FiltersSearchListItemMobile/FiltersSearchListItemMobileInfoStatus/FiltersSearchListItemMobileInfoStatus';

interface IOrderListPreviewGridsProps {
	data: any;
}

export const OrderListPreviewGrids: FC<IOrderListPreviewGridsProps> = ({ data }) => (
	<>
		{data.dataSearch.map((item: any) => (
			<Col span={24} key={item.id}>
				<StatusContainer>
					<FiltersSearchListItemMobileInfoStatus key={item.id} item={item} />
				</StatusContainer>
			</Col>
		))}
	</>
);
