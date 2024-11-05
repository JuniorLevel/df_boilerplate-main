import React, { FC, useState } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { screenMDMin, screenLGMax, useStyles } from './Time2LgPrmt.styles';
import { TimeWidgetsDateWithTimeBlock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsWeeksAndYearsPanel } from '@/primitives/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsCustomClock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsDaysPanel } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDaysPanel/TimeWidgetsDaysPanel';

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
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				</div>
				<Flex justify="center" align="center">
					<Flex vertical align="center" gap={10}>
						<div className={styles.panel}>{isShowWeeksPanel ? <TimeWidgetsWeeksAndYearsPanel /> : <TimeWidgetsDaysPanel />}</div>
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
