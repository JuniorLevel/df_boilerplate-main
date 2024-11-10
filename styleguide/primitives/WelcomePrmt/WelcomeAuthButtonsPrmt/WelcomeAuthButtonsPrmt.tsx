import React, { FC } from 'react';
import { Flex } from 'antd';

interface IWelcomeAuthButtonsPrmtProps {
	children: React.ReactNode;
}

export const WelcomeAuthButtonsPrmt: FC<IWelcomeAuthButtonsPrmtProps> = ({ children }) => (
	<Flex wrap gap="large" justify="center">
		{children}
	</Flex>
);
