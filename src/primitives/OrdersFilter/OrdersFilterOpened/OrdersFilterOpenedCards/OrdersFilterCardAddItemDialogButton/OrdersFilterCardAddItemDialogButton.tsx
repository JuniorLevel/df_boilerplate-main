import React, { FC, useContext } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from '@tanstack/react-router';
import { OrdersFilterContext } from '../../../OrdersFilterContext';

interface IOrdersFilterCardAddItemDialogButtonProps {
	cardItem: any[];
}

export const OrdersFilterCardAddItemDialogButton: FC<IOrdersFilterCardAddItemDialogButtonProps> = ({ cardItem }) => {
	const { setOrdersFilterItems } = useContext(OrdersFilterContext);

	const navigate = useNavigate();

	const addFilterItem = () => {
		navigate({ to: '/dialog' });
		setOrdersFilterItems([...cardItem]);
	};

	return <Button block icon={<PlusOutlined />} onClick={addFilterItem} />;
};
