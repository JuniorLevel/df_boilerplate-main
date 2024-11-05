import React, { FC, ReactNode } from 'react';
import { useStyles } from '../order.tabs.styles';

interface IOrderContainerProps {
	children: ReactNode;
}

export const OrderContainer: FC<IOrderContainerProps> = ({ children }) => {
	const { styles } = useStyles();
	return <div className={styles.orderContainer}>{children}</div>;
};
