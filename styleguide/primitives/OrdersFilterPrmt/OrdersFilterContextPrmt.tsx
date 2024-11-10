import React, { createContext, FC, ReactNode, useMemo, useState } from 'react';

interface IOrdersFilterProviderPrmtProps {
	children: ReactNode;
}

interface IOrdersFilterContextPrmtProps {
	isOpenedCards: boolean;
	setIsOpenedCards: (isOpenedCards: boolean) => void;
	ordersFilterItems: any[];
	setOrdersFilterItems: (ordersFilterItems: any[]) => void;
}

export const OrdersFilterContextPrmt = createContext<IOrdersFilterContextPrmtProps>({
	isOpenedCards: false,
	setIsOpenedCards: () => {},
	ordersFilterItems: [],
	setOrdersFilterItems: () => {},
});

export const OrdersFilterProviderPrmt: FC<IOrdersFilterProviderPrmtProps> = ({ children }) => {
	const [isOpenedCards, setIsOpenedCards] = useState(false);
	const [ordersFilterItems, setOrdersFilterItems] = useState<any[]>([]);

	const value = useMemo(
		() => ({
			isOpenedCards,
			setIsOpenedCards,
			ordersFilterItems,
			setOrdersFilterItems,
		}),
		[isOpenedCards, setIsOpenedCards, ordersFilterItems, setOrdersFilterItems]
	);

	return <OrdersFilterContextPrmt.Provider value={value}>{children}</OrdersFilterContextPrmt.Provider>;
};
