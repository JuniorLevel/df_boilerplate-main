import React, { FC } from 'react';
import { Flex } from 'antd';
import { useStyles } from '../OrderTabsPrmt.styles';

export const OrderPreviewPrmt: FC = () => {
	const { styles } = useStyles();

	return (
		<Flex justify="center" align="center" className={styles.orderPreview}>
			<div>Preview Order Page</div>
		</Flex>
	);
};
