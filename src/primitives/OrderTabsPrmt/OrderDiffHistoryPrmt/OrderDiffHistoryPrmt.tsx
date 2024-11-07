import React, { FC } from 'react';
import { Row, Col } from 'antd';
import { OrderVersionPrmt } from '../OrderVersionPrmt/OrderVersionPrmt';
import { OrderPreviewPrmt } from '../OrderPreviewPrmt/OrderPreviewPrmt';
import { OrderContainerPrmt } from '../OrderContainerPrmt/OrderContainerPrmt';

interface IOrderDiffHistoryPrmtProps {
	filters: any;
}

export const OrderDiffHistoryPrmt: FC<IOrderDiffHistoryPrmtProps> = ({ filters }) => (
	<OrderContainerPrmt>
		<Row gutter={[16, 16]}>
			<Col xs={12}>
				<Row gutter={[16, 16]}>
					<Col xs={12}>
						<OrderVersionPrmt filters={filters} />
					</Col>
					<Col xs={12}>
						<OrderPreviewPrmt />
					</Col>
				</Row>
			</Col>

			<Col xs={12}>
				<Row gutter={[16, 16]}>
					<Col xs={12}>
						<OrderPreviewPrmt />
					</Col>
					<Col xs={12}>
						<OrderVersionPrmt filters={filters} />
					</Col>
				</Row>
			</Col>
		</Row>
	</OrderContainerPrmt>
);
