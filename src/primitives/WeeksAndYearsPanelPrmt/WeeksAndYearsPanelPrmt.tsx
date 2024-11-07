import React, { FC } from 'react';
import { Flex } from 'antd';
import { useStyles } from './WeeksAndYearsPanelPrmt.styles';

export const WeeksAndYearsPanelPrmt: FC = () => {
	const { styles } = useStyles();

	return (
		<div className={styles.panel}>
			<Flex gap={10}>
				<div className={styles.weeks} />
				<div className={styles.weeks} />
				<div className={styles.years} />
				<div className={styles.years} />
			</Flex>
		</div>
	);
};
