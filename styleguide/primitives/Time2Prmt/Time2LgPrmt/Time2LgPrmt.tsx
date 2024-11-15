import React, { FC, useState } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { screenMDMin, screenLGMax, useStyles } from './Time2LgPrmt.styles';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { DaysPanelPrmt } from '@/primitives/DaysPanelPrmt/DaysPanelPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';

interface ITime2LgPrmtProps {
	durationStart?: string;
}

export const Time2LgPrmt: FC<ITime2LgPrmtProps> = ({ durationStart }) => {
	const [isShowWeeksPanel] = useState(false);

	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenMDMin} maxWidth={screenLGMax}>
			<Flex className={styles.container} gap={5} justify="space-evenly">
				<div>
					<DateWithTimeBlockPrmt durationTime={durationStart} />
				</div>
				<Flex justify="center" align="center">
					<Flex vertical align="center" gap={10}>
						<div className={styles.panel}>
							{isShowWeeksPanel ? <WeeksAndYearsPanelPrmt /> : <DaysPanelPrmt size={{ width: 8, height: 40 }} percent={100} steps={31} showInfo={false} />}
						</div>
						<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
