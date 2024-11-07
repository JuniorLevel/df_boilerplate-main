import React, { FC, ReactNode } from 'react';
import { Row } from 'antd';

interface IOrderListPreviewContainerPrmtProps {
	children: ReactNode;
}

export const OrderListPreviewContainerPrmt: FC<IOrderListPreviewContainerPrmtProps> = ({ children }) => <Row gutter={[16, 16]}>{children}</Row>;
