import { Flex } from 'antd';
import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { useStyles, screenLGMin, screenXLMax } from './RangeTime4XlPrmt.styles';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { DaysPanelPrmt } from '@/primitives/DaysPanelPrmt/DaysPanelPrmt';

interface IRangeTime4XlPrmtProps {
	fullDate: { date: string; time: string };
}

export const RangeTime4XlPrmt: FC<IRangeTime4XlPrmtProps> = ({ fullDate }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenLGMin} maxWidth={screenXLMax}>
			<Flex justify="space-between" align="center" className={styles.container}>
				<Flex gap={10}>
					<Flex vertical justify="center" gap={10}>
						<DateWithTimeBlockPrmt fullDate={fullDate} />
						<Flex wrap align="center" gap={10}>
							<DateWithTimeBlockPrmt fullDate={fullDate} />
						</Flex>
					</Flex>
					<Flex vertical gap={10}>
						<CustomClockPrmt />
						<CustomClockPrmt />
					</Flex>
				</Flex>
				<Flex className={styles.progress}>
					<DaysPanelPrmt />
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
