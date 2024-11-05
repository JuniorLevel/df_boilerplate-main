import React, { FC } from 'react';
import { Row, Col } from 'antd';
import { OrderVersion } from '../OrderVersion/OrdersVersion';
import { OrderPreview } from '../OrderPreview/OrderPreview';
import { OrderContainer } from '../OrderContainer/OrderContainer';

interface IOrderDiffHistoryProps {
	filters: any;
}

export const OrderDiffHistory: FC<IOrderDiffHistoryProps> = ({ filters }) => (
	<OrderContainer>
		<Row gutter={[16, 16]}>
			<Col xs={12}>
				<Row gutter={[16, 16]}>
					<Col xs={12}>
						<OrderVersion filters={filters} />
					</Col>
					<Col xs={12}>
						<OrderPreview />
					</Col>
				</Row>
			</Col>

			<Col xs={12}>
				<Row gutter={[16, 16]}>
					<Col xs={12}>
						<OrderPreview />
					</Col>
					<Col xs={12}>
						<OrderVersion filters={filters} />
					</Col>
				</Row>
			</Col>
		</Row>
	</OrderContainer>
);
