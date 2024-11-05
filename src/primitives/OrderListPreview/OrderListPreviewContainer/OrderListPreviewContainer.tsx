import React, { FC, ReactNode } from 'react';
import { Row } from 'antd';

interface IOrderListPreviewContainerProps {
	children: ReactNode;
}

export const OrderListPreviewContainer: FC<IOrderListPreviewContainerProps> = ({ children }) => <Row gutter={[16, 16]}>{children}</Row>;
