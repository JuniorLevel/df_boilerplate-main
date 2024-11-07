import React, { FC, useState } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { screenMDMin, screenLGMax, useStyles } from './Time2LgPrmt.styles';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { DaysPanelPrmt } from '@/primitives/DaysPanelPrmt/DaysPanelPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';

interface ITime2LgPrmtProps {
	fullDate: { date: string; time: string };
}

export const Time2LgPrmt: FC<ITime2LgPrmtProps> = ({ fullDate }) => {
	const [isShowWeeksPanel] = useState(false);

	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenMDMin} maxWidth={screenLGMax}>
			<Flex className={styles.container} gap={5} justify="space-evenly">
				<div>
					<DateWithTimeBlockPrmt fullDate={fullDate} />
				</div>
				<Flex justify="center" align="center">
					<Flex vertical align="center" gap={10}>
						<div className={styles.panel}>{isShowWeeksPanel ? <WeeksAndYearsPanelPrmt /> : <DaysPanelPrmt />}</div>
						<CustomClockPrmt />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
