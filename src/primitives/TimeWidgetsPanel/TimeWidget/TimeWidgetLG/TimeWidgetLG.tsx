import React, { FC, ReactNode } from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { useStyles, screenLGMin, screenXLMax } from './TimeWidgetLG.styles';

interface ITimeWidgetLGProps {
	fullDate: { date: string; time: string };
	children: ReactNode;
}

export const TimeWidgetLG: FC<ITimeWidgetLGProps> = ({ fullDate, children }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenLGMin} maxWidth={screenXLMax}>
			<Flex wrap gap={10} align="center" justify="center" className={styles.container}>
				<div className={styles.content}>{children}</div>
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				<Flex gap={10} align="center">
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsCustomClock />
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
