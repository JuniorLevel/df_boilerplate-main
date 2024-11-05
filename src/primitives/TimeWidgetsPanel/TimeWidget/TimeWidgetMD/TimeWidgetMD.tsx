import React, { FC, ReactNode } from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { useStyles, screenLGMax, screenMDMin } from './TimeWidgetMD.styles';

interface ITimeWidgetMDProps {
	fullDate: { date: string; time: string };
	children: ReactNode;
}

export const TimeWidgetMD: FC<ITimeWidgetMDProps> = ({ fullDate, children }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenMDMin} maxWidth={screenLGMax}>
			<Flex wrap align="center" gap={10} className={styles.container} justify="center">
				<div className={styles.content}>{children}</div>
				<Flex vertical align="center" gap={10}>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					<Flex gap={50} align="center">
						<TimeWidgetsCustomClock />
						<TimeWidgetsWeeksAndYearsPanel />
						<TimeWidgetsCustomClock />
					</Flex>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
