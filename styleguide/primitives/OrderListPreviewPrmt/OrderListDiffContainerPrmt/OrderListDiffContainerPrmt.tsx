import React, { FC, ReactNode, useContext } from 'react';
import { useStyles } from '../OrdersListPreviewPrmt.styles';
import { ThemeContextPrmt } from '@/primitives/ThemeWrapperPrmt/ThemeContextPrmt';

interface IOrderListDiffContainerPrmtProps {
	children: ReactNode;
}

export const OrderListDiffContainerPrmt: FC<IOrderListDiffContainerPrmtProps> = ({ children }) => {
	const { styles } = useStyles();
	const { isFooter } = useContext(ThemeContextPrmt);

	return <div className={isFooter ? styles.orderListDiffContainerWithFooter : styles.orderListDiffContainer}>{children}</div>;
};
