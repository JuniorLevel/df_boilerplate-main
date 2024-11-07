import React, { FC, ReactNode } from 'react';
import MediaQuery from 'react-responsive';
import { TimeRangeWidgetLgCnstr } from './TimeRangeWidgetLgCnstr/TimeRangeWidgetLgCnstr';
import { TimeRangeWidgetMdCnstr } from './TimeRangeWidgetMdCnstr/TimeRangeWidgetMdCnstr';
import { TimeRangeWidgetSmCnstr } from './TimeRangeWidgetSmCnstr/TimeRangeWidgetSmCnstr';
import { useStyles, screenXLMin } from './TimeRangeWidgetCnstr.styles';
import { RangeTime5Prmt } from '@/primitives/RangeTime5Prmt/RangeTime5Prmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';

interface ITimeRangeWidgetCnstrProps {
	fullDate: { date: string; time: string };
	children: ReactNode;
}

export const TimeRangeWidgetCnstr: FC<ITimeRangeWidgetCnstrProps> = ({ fullDate, children }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenXLMin}>
				<FlexPrmt vertical gap={10} className={styles.container}>
					{children}
					<RangeTime5Prmt fullDate={fullDate} />
				</FlexPrmt>
			</MediaQuery>
			<TimeRangeWidgetLgCnstr fullDate={fullDate}>{children}</TimeRangeWidgetLgCnstr>
			<TimeRangeWidgetMdCnstr fullDate={fullDate}>{children}</TimeRangeWidgetMdCnstr>
			<TimeRangeWidgetSmCnstr fullDate={fullDate}>{children}</TimeRangeWidgetSmCnstr>
		</>
	);
};
