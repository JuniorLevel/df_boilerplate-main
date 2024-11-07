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
	fullDate: { date: string; time: string };
	children: ReactNode;
}

export const TimeWidgetCnstr: FC<ITimeWidgetCnstrProps> = ({ fullDate, children }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenXLMin}>
				<FlexPrmt gap={10} align="center" className={styles.container}>
					<div className={styles.content}>{children}</div>
					<DateWithTimeBlockPrmt fullDate={fullDate} />
					<FlexPrmt gap={10} align="center">
						<WeeksAndYearsPanelPrmt />
						<CustomClockPrmt />
					</FlexPrmt>
				</FlexPrmt>
			</MediaQuery>
			<TimeWidgetLgCnstr fullDate={fullDate}>{children}</TimeWidgetLgCnstr>
			<TimeWidgetMdCnstr fullDate={fullDate}>{children}</TimeWidgetMdCnstr>
			<TimeWidgetSmCnstr fullDate={fullDate}>{children}</TimeWidgetSmCnstr>
		</>
	);
};
