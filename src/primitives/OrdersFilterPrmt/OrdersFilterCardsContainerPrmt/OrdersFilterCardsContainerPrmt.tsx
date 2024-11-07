import React, { FC, ReactNode } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { OrdersFilterCardsContainerMobilePrmt } from './OrdersFilterCardsContainerMobilePrmt/OrdersFilterCardsContainerMobilePrmt';
import { useStyles, screenSMMin } from '../OrdersFilterOpenedPrmt/OrdersFilterOpened.styles';

interface IOrdersFilterCardsContainerPrmtProps {
	children: ReactNode;
}

export const OrdersFilterCardsContainerPrmt: FC<IOrdersFilterCardsContainerPrmtProps> = ({ children }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenSMMin}>
				<Flex className={styles.ordersFilterCardsContainer}>{children}</Flex>
			</MediaQuery>
			<OrdersFilterCardsContainerMobilePrmt>{children}</OrdersFilterCardsContainerMobilePrmt>
		</>
	);
};
