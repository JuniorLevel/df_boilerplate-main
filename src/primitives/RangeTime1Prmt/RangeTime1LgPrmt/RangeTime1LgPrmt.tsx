import React, { FC } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { useStyles, screenLGMax } from './RangeTime1LgPrmt.styles';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';

interface IRangeTime1LgPrmtProps {
	fullDate: { date: string; time: string };
}

export const RangeTime1LgPrmt: FC<IRangeTime1LgPrmtProps> = ({ fullDate }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenLGMax}>
			<Flex justify="center" wrap className={styles.container}>
				<Flex vertical wrap gap={10} justify="center" align="center" className={styles.item}>
					<Flex wrap gap={10} justify="center">
						<DateWithTimeBlockPrmt fullDate={fullDate} />
					</Flex>
					<WeeksAndYearsPanelPrmt />
				</Flex>
				<Flex vertical wrap gap={10} justify="center" align="center" className={styles.item}>
					<Flex wrap gap={10} justify="center">
						<DateWithTimeBlockPrmt fullDate={fullDate} />
					</Flex>
					<WeeksAndYearsPanelPrmt />
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
