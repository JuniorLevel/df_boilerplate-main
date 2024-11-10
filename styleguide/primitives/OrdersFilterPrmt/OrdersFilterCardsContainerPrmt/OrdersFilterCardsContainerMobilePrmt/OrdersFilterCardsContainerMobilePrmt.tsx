import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { ReactNode } from '@tanstack/react-router';
import { screenSMMax } from '../../OrdersFilterOpenedPrmt/OrdersFilterOpened.styles';
interface IOrdersFilterCardsContainerMobilePrmtProps {
	children: ReactNode;
}

export const OrdersFilterCardsContainerMobilePrmt: FC<IOrdersFilterCardsContainerMobilePrmtProps> = ({ children }) => {
	return (
		<MediaQuery maxWidth={screenSMMax}>
			<Flex justify="center">{children}</Flex>
		</MediaQuery>
	);
};
