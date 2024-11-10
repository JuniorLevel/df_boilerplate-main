import React, { FC } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface IOrdersFilterCardAddItemButtonPrmtProps {
	onClick: () => any;
}

export const OrdersFilterCardAddItemButtonPrmt: FC<IOrdersFilterCardAddItemButtonPrmtProps> = ({ onClick }) => <Button block icon={<PlusOutlined />} onClick={onClick} />;
