import React, { createContext, FC, ReactNode, useMemo, useState } from 'react';

interface IOrdersFilterProvider {
	children: ReactNode;
}

interface IOrdersFilterContext {
	isOpenedCards: boolean;
	setIsOpenedCards: (isOpenedCards: boolean) => void;
	ordersFilterItems: any[];
	setOrdersFilterItems: (ordersFilterItems: any[]) => void;
}

export const OrdersFilterContext = createContext<IOrdersFilterContext>({
	isOpenedCards: false,
	setIsOpenedCards: () => {},
	ordersFilterItems: [],
	setOrdersFilterItems: () => {},
});

export const OrdersFilterProvider: FC<IOrdersFilterProvider> = ({ children }) => {
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

	return <OrdersFilterContext.Provider value={value}>{children}</OrdersFilterContext.Provider>;
};
