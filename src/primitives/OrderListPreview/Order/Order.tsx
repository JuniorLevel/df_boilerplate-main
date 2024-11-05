import React, { FC } from 'react';
import { Flex } from 'antd';
import { useStyles } from '../orders.list.preview.styles';

export const Order: FC = () => {
	const { styles } = useStyles();

	return (
		<Flex vertical justify="center" align="center" className={styles.order}>
			<div>Preview Page</div>
		</Flex>
	);
};
