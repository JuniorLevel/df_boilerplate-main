import React, { FC, useContext, useEffect } from 'react';
import { StatusContext } from '@/tmp/OrdersFilter/StatusContainer/StatusContainerContext';

interface IOrdersFilterOpenedCardItemProps {
	item: any;
}

export const OrdersFilterOpenedCardItem: FC<IOrdersFilterOpenedCardItemProps> = ({ item }) => {
	const { setStatus } = useContext(StatusContext);

	useEffect(() => {
		setStatus(item.status);
	}, [item.status, setStatus]);

	return <div>{item.text}</div>;
};
