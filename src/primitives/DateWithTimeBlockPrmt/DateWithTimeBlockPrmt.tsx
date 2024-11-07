import React, { FC } from 'react';
import { Flex, Typography } from 'antd';
import { useStyles } from './DateWithTimeBlockPrmt.styles';

interface IDateWithTimeBlockPrmtProps {
	fullDate: { date: string; time: string };
}

export const DateWithTimeBlockPrmt: FC<IDateWithTimeBlockPrmtProps> = ({ fullDate }) => {
	const { Text } = Typography;
	const { date, time } = fullDate;

	const { styles } = useStyles();

	return (
		<Flex wrap gap={10} align="center" justify="center">
			<Flex gap={10}>
				{date.split('.').map((item, idx) => (
					<Text key={idx} className={styles.dateBlock}>
						{item}
					</Text>
				))}
			</Flex>
			<Flex gap={10}>
				{time.split(':').map((item, idx) => (
					<Text key={idx} className={styles.timeBlock}>
						{item}
					</Text>
				))}
			</Flex>
		</Flex>
	);
};
