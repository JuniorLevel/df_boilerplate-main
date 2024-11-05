import React, { FC, ReactNode } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { OrdersFilterCardsContainerMobile } from './OrdersFilterCardsContainerMobile/OrdersFilterCardsContainerMobile';
import { useStyles } from '../OrdersFilterOpened/orders.filter.opened.styles';

interface IOrdersFilterCardsContainerProps {
	children: ReactNode;
}

export const OrdersFilterCardsContainer: FC<IOrdersFilterCardsContainerProps> = ({ children }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={361}>
				<Flex className={styles.ordersFilterCardsContainer}>{children}</Flex>
			</MediaQuery>
			<OrdersFilterCardsContainerMobile>{children}</OrdersFilterCardsContainerMobile>
		</>
	);
};
