import React, { FC } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface IOrdersFilterCardAddItemButtonProps {
	onClick: () => any;
}

export const OrdersFilterCardAddItemButton: FC<IOrdersFilterCardAddItemButtonProps> = ({ onClick }) => <Button block icon={<PlusOutlined />} onClick={onClick} />;
