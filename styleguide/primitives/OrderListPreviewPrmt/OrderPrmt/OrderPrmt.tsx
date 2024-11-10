import React, { FC } from 'react';
import { Flex } from 'antd';
import { useStyles } from '../OrdersListPreviewPrmt.styles';

export const OrderPrmt: FC = () => {
	const { styles } = useStyles();

	return (
		<Flex vertical justify="center" align="center" className={styles.order}>
			<div>Preview Page</div>
		</Flex>
	);
};
