import React, { FC } from 'react';
import { Flex } from 'antd';
import { useStyles } from '../order.tabs.styles';

export const OrderPreview: FC = () => {
	const { styles } = useStyles();

	return (
		<Flex justify="center" align="center" className={styles.orderPreview}>
			<div>Preview Order Page</div>
		</Flex>
	);
};
