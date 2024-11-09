import React, { FC, useContext } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from '@tanstack/react-router';
import { OrdersFilterContextPrmt } from '../../../OrdersFilterContextPrmt';

interface IOrdersFilterCardAddItemDialogButtonPrmtProps {
	cardItem: any[];
}

export const OrdersFilterCardAddItemDialogButtonPrmt: FC<IOrdersFilterCardAddItemDialogButtonPrmtProps> = ({ cardItem }) => {
	const { setOrdersFilterItems } = useContext(OrdersFilterContextPrmt);

	const navigate = useNavigate();

	const addFilterItem = () => {
		navigate({ to: '/dialog' });
		setOrdersFilterItems([...cardItem]);
	};

	return <Button block icon={<PlusOutlined />} onClick={addFilterItem} />;
};