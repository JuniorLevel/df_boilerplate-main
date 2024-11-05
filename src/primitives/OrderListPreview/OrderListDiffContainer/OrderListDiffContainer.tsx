import React, { FC, ReactNode, useContext } from 'react';
import { useStyles } from '../orders.list.preview.styles';
import { ThemeContext } from '../../../primitives/ThemeWrapper/ThemeContext';

interface IOrderListDiffContainerProps {
	children: ReactNode;
}

export const OrderListDiffContainer: FC<IOrderListDiffContainerProps> = ({ children }) => {
	const { styles } = useStyles();
	const { isFooter } = useContext(ThemeContext);

	return <div className={isFooter ? styles.orderListDiffContainerWithFooter : styles.orderListDiffContainer}>{children}</div>;
};
