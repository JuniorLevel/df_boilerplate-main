import React, { FC, ReactNode } from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { TimeWidgetsDateWithTimeBlock } from '../../TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsCustomClock } from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { useStyles, screenMDMax } from './TimeWidgetSM.styles';

interface ITimeWidgetSMProps {
	fullDate: { date: string; time: string };
	children: ReactNode;
}

export const TimeWidgetSM: FC<ITimeWidgetSMProps> = ({ fullDate, children }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenMDMax}>
			<Flex vertical align="center" gap={10} className={styles.container} justify="center">
				<div className={styles.content}>{children}</div>
				<Flex vertical gap={10}>
					<Flex vertical align="center" gap={10}>
						<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
						<TimeWidgetsCustomClock />
					</Flex>
					<Flex vertical align="center" gap={10}>
						<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
						<TimeWidgetsCustomClock />
					</Flex>
					<Flex justify="center">
						<TimeWidgetsWeeksAndYearsPanel />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
