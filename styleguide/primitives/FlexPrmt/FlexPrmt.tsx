import { ReactNode } from '@tanstack/react-router';
import { Flex } from 'antd';
import React, { FC } from 'react';

interface IFlexPrmtProps {
	className?: string;
	wrap?: boolean;
	vertical?: boolean;
	gap?: number;
	align?: string;
	justify?: string;
	children: ReactNode;
}

export const FlexPrmt: FC<IFlexPrmtProps> = ({ className, gap, align, justify, wrap, vertical, children }) => {
	return (
		<Flex className={className} wrap={wrap} vertical={vertical} gap={gap} align={align} justify={justify}>
			{children}
		</Flex>
	);
};
