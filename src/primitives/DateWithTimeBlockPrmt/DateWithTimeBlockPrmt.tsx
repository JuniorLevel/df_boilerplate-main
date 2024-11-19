import React, { FC } from 'react';
import { Flex, Typography } from 'antd';
import { useStyles } from './DateWithTimeBlockPrmt.styles';

interface IDateWithTimeBlockPrmtProps {
	durationTime?: string;
}

export const DateWithTimeBlockPrmt: FC<IDateWithTimeBlockPrmtProps> = ({ durationTime }) => {
	const { Text } = Typography;

	const { styles } = useStyles();

	const pattern = /^\d{2}\.\d{2}\.\d{2}-\d{2}:\d{2}:\d{2}$/;

	if (typeof durationTime === 'undefined' || !pattern.test(durationTime)) {
		durationTime = '';
	}

	const date = durationTime ? durationTime?.split('-')[0] : '';
	const time = durationTime ? durationTime?.split('-')[1] : '';

	return (
		<Flex wrap gap={10} align="center" justify="center">
			<Flex gap={10}>
				{durationTime
					? date.split('.').map((item, idx) => (
							<Text key={idx} className={styles.block}>
								{item}
							</Text>
						))
					: [0, 1, 2].map((item, idx) => <Text key={idx} className={styles.block} />)}
			</Flex>
			<Flex gap={10}>
				{durationTime
					? time.split(':').map((item, idx) => (
							<Text key={idx} className={styles.block}>
								{item}
							</Text>
						))
					: [0, 1, 2].map((item, idx) => <Text key={idx} className={styles.block} />)}
			</Flex>
		</Flex>
	);
};
