import React, { FC } from 'react';
import { Flex } from 'antd';

interface IWelcomeAuthButtonsProps {
	children: React.ReactNode;
}

export const WelcomeAuthButtons: FC<IWelcomeAuthButtonsProps> = ({ children }) => (
	<Flex wrap gap="large" justify="center">
		{children}
	</Flex>
);
