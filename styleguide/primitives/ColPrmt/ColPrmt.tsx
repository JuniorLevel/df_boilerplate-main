import { Col } from 'antd';
import React, { FC, ReactNode } from 'react';

interface IColPrmtProps {
	span?: number;
	children: ReactNode;
	xs?: number | string;
	sm?: number | string;
	md?: number | string;
	lg?: number | string;
	xl?: number | string;
	xxl?: number | string;
}

export const ColPrmt: FC<IColPrmtProps> = ({ span, xs, sm, md, lg, xl, xxl, children }) => {
	return (
		<Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} span={span}>
			{children}
		</Col>
	);
};
