import React, { FC, ReactNode } from 'react';
import MediaQuery from 'react-responsive';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { TimeWidgetLgCnstr } from './TimeWidgetLgCnstr/TimeWidgetLgCnstr';
import { TimeWidgetMdCnstr } from './TimeWidgetMdCnstr/TimeWidgetMdCnstr';
import { TimeWidgetSmCnstr } from './TimeWidgetSmCnstr/TimeWidgetSmCnstr';
import { useStyles, screenXLMin } from './TimeWidgetCnstr.styles';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';

interface ITimeWidgetCnstrProps {
	durationStart?: string;
	children: ReactNode;
}

export const TimeWidgetCnstr: FC<ITimeWidgetCnstrProps> = ({ durationStart, children }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenXLMin}>
				<FlexPrmt gap={10} align="center" className={styles.container}>
					<div className={styles.content}>{children}</div>
					<DateWithTimeBlockPrmt durationTime={durationStart} />
					<FlexPrmt gap={10} align="center">
						<WeeksAndYearsPanelPrmt />
						<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
					</FlexPrmt>
				</FlexPrmt>
			</MediaQuery>
			<TimeWidgetLgCnstr durationStart={durationStart}>{children}</TimeWidgetLgCnstr>
			<TimeWidgetMdCnstr durationStart={durationStart}>{children}</TimeWidgetMdCnstr>
			<TimeWidgetSmCnstr durationStart={durationStart}>{children}</TimeWidgetSmCnstr>
		</>
	);
};
