import React, { FC } from 'react';
import { Flex, Typography } from 'antd';
import MediaQuery from 'react-responsive';
import { Time1MdPrmt } from './Time1MdPrmt/Time1MdPrmt';
import { useStyles, screenMDMin } from './Time1Prmt.styles';
import { TimeWidgetsDaysPanel } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDaysPanel/TimeWidgetsDaysPanel';

interface ITime1PrmtProps {
	date: string;
}
export const Time1Prmt: FC<ITime1PrmtProps> = ({ date }) => {
	const { Text } = Typography;

	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenMDMin}>
				<Flex wrap className={styles.container} gap={5}>
					<Flex gap={10} className={styles.date} align="center">
						{date.split(' ').map((item, idx) => (
							<Text key={idx}>{item}</Text>
						))}
					</Flex>
					<Flex className={styles.block}>
						<Flex className={styles.block}>
							<TimeWidgetsDaysPanel />
						</Flex>
					</Flex>
				</Flex>
			</MediaQuery>
			<Time1MdPrmt date="13 августа 1999" />
		</>
	);
};
