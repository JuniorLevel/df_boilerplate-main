import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { Col, Pagination as OrdersPagination } from 'antd';
import { OrderListContainerPrmt } from './OrderListContainerPrmt/OrderListContainerPrmt';
import { OrderPrmt } from './OrderPrmt/OrderPrmt';
import { data } from './data';
import { OrderListItemPrmt } from './OrderListContainerPrmt/OrderListItemPrmt/OrderListItemPrmt';
import { OrderListPreviewContainerPrmt } from './OrderListPreviewContainerPrmt/OrderListPreviewContainerPrmt';
import { screenSMMin } from './OrdersListPreviewPrmt.styles';

export const OrderListPreviewPrmt: FC = () => (
	<MediaQuery minWidth={screenSMMin}>
		<OrderListPreviewContainerPrmt>
			<Col span={12}>
				<OrderListContainerPrmt>
					<OrderListItemPrmt key={data[0].id} data={data[0]} />
					<OrderListItemPrmt key={data[1].id} data={data[1]} />
					<OrderListItemPrmt key={data[2].id} data={data[2]} />
					<OrderListItemPrmt key={data[3].id} data={data[3]} />
					<OrderListItemPrmt key={data[4].id} data={data[4]} />
					<OrderListItemPrmt key={data[5].id} data={data[5]} />
					<OrderListItemPrmt key={data[6].id} data={null} />
				</OrderListContainerPrmt>
				<OrdersPagination defaultCurrent={1} total={50} />
			</Col>
			<Col span={12}>
				<OrderPrmt />
			</Col>
		</OrderListPreviewContainerPrmt>
	</MediaQuery>
);
