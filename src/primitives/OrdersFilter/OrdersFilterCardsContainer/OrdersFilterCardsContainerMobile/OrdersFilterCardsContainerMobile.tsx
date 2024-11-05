import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { ReactNode } from '@tanstack/react-router';

interface IOrdersFilterCardsContainerMobileProps {
	children: ReactNode;
}

export const OrdersFilterCardsContainerMobile: FC<IOrdersFilterCardsContainerMobileProps> = ({ children }) => {
	return (
		<MediaQuery maxWidth={360}>
			<Flex justify="center">{children}</Flex>
		</MediaQuery>
	);
};
