import React, { FC } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { useStyles, screenLGMax } from './RangeTime3LgPrmt.styles';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';

interface IRangeTime3LgPrmtProps {
	fullDate: { date: string; time: string };
}

export const RangeTime3LgPrmt: FC<IRangeTime3LgPrmtProps> = ({ fullDate }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenLGMax}>
			<Flex vertical gap={10} align="center" className={styles.container}>
				<Flex wrap align="center">
					<Flex wrap gap={10} justify="center">
						<DateWithTimeBlockPrmt fullDate={fullDate} />
					</Flex>
				</Flex>
				<Flex className={styles.panel}>
					<Flex gap={10}>
						<div className={styles.years} />
						<div className={styles.years} />
						<div className={styles.years} />
					</Flex>
				</Flex>
				<Flex wrap align="center">
					<Flex wrap gap={10} justify="center">
						<DateWithTimeBlockPrmt fullDate={fullDate} />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
