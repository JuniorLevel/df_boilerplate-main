import React, { FC, ReactNode, useContext } from 'react';
import { useStyles } from '../OrdersListPreviewPrmt.styles';
import { ThemeContextPrmt } from '@/primitives/ThemeWrapperPrmt/ThemeContextPrmt';

interface IOrderListDiffContainerProps {
	children: ReactNode;
}

export const OrderListDiffContainer: FC<IOrderListDiffContainerProps> = ({ children }) => {
	const { styles } = useStyles();
	const { isFooter } = useContext(ThemeContextPrmt);

	return <div className={isFooter ? styles.orderListDiffContainerWithFooter : styles.orderListDiffContainer}>{children}</div>;
};
