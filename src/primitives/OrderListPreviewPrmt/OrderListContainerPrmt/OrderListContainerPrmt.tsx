import React, { FC, ReactNode, useContext } from 'react';
import { useStyles } from '../OrdersListPreviewPrmt.styles';
import { ThemeContextPrmt } from '@/primitives/ThemeWrapperPrmt/ThemeContextPrmt';

interface IOrderListContainerPrmtProps {
	children: ReactNode;
}
export const OrderListContainerPrmt: FC<IOrderListContainerPrmtProps> = ({ children }) => {
	const { styles } = useStyles();
	const { isFooter } = useContext(ThemeContextPrmt);

	return <div className={isFooter ? styles.orderListContainerWithFooter : styles.orderListContainer}>{children}</div>;
};
