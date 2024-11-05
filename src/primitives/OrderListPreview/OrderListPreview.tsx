import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { Col, Pagination as OrdersPagination } from 'antd';
import { OrderListContainer } from './OrderListContainer/OrderListContainer';
import { Order } from './Order/Order';
import { data } from './data';
import { OrderListItem } from './OrderListContainer/OrderListItem/OrderListItem';
import { OrderListPreviewContainer } from './OrderListPreviewContainer/OrderListPreviewContainer';

export const OrderListPreview: FC = () => (
	<MediaQuery minWidth={361}>
		<OrderListPreviewContainer>
			<Col span={12}>
				<OrderListContainer>
					<OrderListItem key={data[0].id} data={data[0]} />
					<OrderListItem key={data[1].id} data={data[1]} />
					<OrderListItem key={data[2].id} data={data[2]} />
					<OrderListItem key={data[3].id} data={data[3]} />
					<OrderListItem key={data[4].id} data={data[4]} />
					<OrderListItem key={data[5].id} data={data[5]} />
					<OrderListItem key={data[6].id} data={null} />
				</OrderListContainer>
				<OrdersPagination defaultCurrent={1} total={50} />
			</Col>
			<Col span={12}>
				<Order />
			</Col>
		</OrderListPreviewContainer>
	</MediaQuery>
);
