import React, { FC } from 'react';
import { Col, Steps } from 'antd';

interface IOrderVersionProps {
	filters: any;
}

export const OrderVersion: FC<IOrderVersionProps> = ({ filters }) => (
	<Col xs={12}>
		<Steps progressDot current={filters.length} direction="vertical" items={filters} />
	</Col>
);
