import React, { FC, useState } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { Time2LgPrmt } from './Time2LgPrmt/Time2LgPrmt';
import { screenLGMin, useStyles } from './Time2Prmt.styles';
import { TimeWidgetsDateWithTimeBlock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsWeeksAndYearsPanel } from '@/primitives/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDaysPanel } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDaysPanel/TimeWidgetsDaysPanel';
import { TimeWidgetsCustomClock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { Time2MdPrmt } from './Time2MdPrmt/Time2MdPrmt';

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
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					<Flex align="center">
						<Flex wrap align="center" gap={7}>
							<div className={styles.panel}>{isShowWeeksPanel ? <TimeWidgetsWeeksAndYearsPanel /> : <TimeWidgetsDaysPanel />}</div>
							<TimeWidgetsCustomClock />
						</Flex>
					</Flex>
				</Flex>
			</MediaQuery>
			<Time2LgPrmt fullDate={fullDate} />
			<Time2MdPrmt fullDate={fullDate} />
		</>
	);
};
