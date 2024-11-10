import { Typography } from 'antd';
import React, { FC, ReactNode } from 'react';

interface ITextTypographyPrmtProps {
	children: ReactNode;
	className?: string;
}

export const TextTypographyPrmt: FC<ITextTypographyPrmtProps> = ({ className, children }) => {
	const { Text } = Typography;

	return <Text className={className}>{children}</Text>;
};
