import React, { FC, ReactNode, useContext } from 'react';
import { useStyles } from '../OrdersListPreviewPrmt.styles';
import { ThemeContextPrmt } from '../../ThemeWrapperPrmt/ThemeContextPrmt';

interface IOrderListContainerProps {
	children: ReactNode;
}
export const OrderListContainer: FC<IOrderListContainerProps> = ({ children }) => {
	const { styles } = useStyles();
	const { isFooter } = useContext(ThemeContextPrmt);

	return <div className={isFooter ? styles.orderListContainerWithFooter : styles.orderListContainer}>{children}</div>;
};
