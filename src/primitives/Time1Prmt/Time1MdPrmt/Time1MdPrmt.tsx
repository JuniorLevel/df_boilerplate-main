import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { Flex, Progress, Typography } from 'antd';
import { screenMDMax, useStyles } from '../Time1Prmt.styles';

interface ITime1MdPrmtProps {
	date: string;
}

export const Time1MdPrmt: FC<ITime1MdPrmtProps> = ({ date }) => {
	const { Text } = Typography;

	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenMDMax}>
			<Flex vertical gap={5}>
				<Flex gap={10} justify="center">
					{date.split(' ').map((item, idx) => (
						<Text key={idx}>{item}</Text>
					))}
				</Flex>
				<Flex className={styles.date} justify="center">
					<Flex className={styles.block}>
						<Progress size={{ width: 6, height: 50 }} percent={100} steps={31} showInfo={false} />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
