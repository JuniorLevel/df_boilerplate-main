import React, { FC, ReactNode, useContext } from 'react';
import { useStyles } from '../orders.list.preview.styles';
import { ThemeContext } from '../../../primitives/ThemeWrapper/ThemeContext';

interface IOrderListContainerProps {
	children: ReactNode;
}
export const OrderListContainer: FC<IOrderListContainerProps> = ({ children }) => {
	const { styles } = useStyles();
	const { isFooter } = useContext(ThemeContext);

	return <div className={isFooter ? styles.orderListContainerWithFooter : styles.orderListContainer}>{children}</div>;
};
