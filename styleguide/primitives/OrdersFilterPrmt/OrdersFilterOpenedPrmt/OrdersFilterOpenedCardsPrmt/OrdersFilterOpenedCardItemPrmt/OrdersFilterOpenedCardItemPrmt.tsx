import React, { FC, useContext, useEffect } from 'react';
import { StatusContextPrmt } from '@/primitives/OrdersFilterPrmt/StatusContainerPrmt/StatusContainerContextPrmt';

interface IOrdersFilterOpenedCardItemPrmtProps {
	item: any;
}

export const OrdersFilterOpenedCardItemPrmt: FC<IOrdersFilterOpenedCardItemPrmtProps> = ({ item }) => {
	const { setStatus } = useContext(StatusContextPrmt);

	useEffect(() => {
		setStatus(item.status);
	}, [item.status, setStatus]);

	return <div>{item.text}</div>;
};
