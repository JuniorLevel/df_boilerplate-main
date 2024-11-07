import React, { FC, useState } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { Time2LgPrmt } from './Time2LgPrmt/Time2LgPrmt';
import { screenLGMin, useStyles } from './Time2Prmt.styles';
import { Time2MdPrmt } from './Time2MdPrmt/Time2MdPrmt';
import { DaysPanelPrmt } from '../DaysPanelPrmt/DaysPanelPrmt';
import { WeeksAndYearsPanelPrmt } from '../WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { CustomClockPrmt } from '../CustomClockPrmt/CustomClockPrmt';
import { DateWithTimeBlockPrmt } from '../DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';

interface ITime2PrmtProps {
	fullDate: { date: string; time: string };
}

export const Time2Prmt: FC<ITime2PrmtProps> = ({ fullDate }) => {
	const [isShowWeeksPanel] = useState(false);

	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenLGMin}>
				<Flex wrap gap={7} className={styles.container}>
					<DateWithTimeBlockPrmt fullDate={fullDate} />
					<Flex align="center">
						<Flex wrap align="center" gap={7}>
							<div className={styles.panel}>
								{isShowWeeksPanel ? <WeeksAndYearsPanelPrmt /> : <DaysPanelPrmt size={{ width: 8, height: 40 }} percent={100} steps={31} showInfo={false} />}
							</div>
							<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
						</Flex>
					</Flex>
				</Flex>
			</MediaQuery>
			<Time2LgPrmt fullDate={fullDate} />
			<Time2MdPrmt fullDate={fullDate} />
		</>
	);
};
