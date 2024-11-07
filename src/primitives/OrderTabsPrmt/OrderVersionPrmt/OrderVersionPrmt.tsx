import React, { FC } from 'react';
import { Col, Steps } from 'antd';

interface IOrderVersionPrmtProps {
	filters: any;
}

export const OrderVersionPrmt: FC<IOrderVersionPrmtProps> = ({ filters }) => (
	<Col xs={12}>
		<Steps progressDot current={filters.length} direction="vertical" items={filters} />
	</Col>
);
