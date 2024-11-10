import React, { FC, ReactNode } from 'react';
import { useStyles } from '../OrderTabsPrmt.styles';

interface IOrderContainerPrmtProps {
	children: ReactNode;
}

export const OrderContainerPrmt: FC<IOrderContainerPrmtProps> = ({ children }) => {
	const { styles } = useStyles();
	return <div className={styles.orderContainer}>{children}</div>;
};
