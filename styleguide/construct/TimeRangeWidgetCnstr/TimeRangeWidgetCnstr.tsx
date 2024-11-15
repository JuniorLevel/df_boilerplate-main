import React, { FC, ReactNode } from 'react';
import MediaQuery from 'react-responsive';
import { TimeRangeWidgetLgCnstr } from './TimeRangeWidgetLgCnstr/TimeRangeWidgetLgCnstr';
import { TimeRangeWidgetMdCnstr } from './TimeRangeWidgetMdCnstr/TimeRangeWidgetMdCnstr';
import { TimeRangeWidgetSmCnstr } from './TimeRangeWidgetSmCnstr/TimeRangeWidgetSmCnstr';
import { useStyles, screenXLMin } from './TimeRangeWidgetCnstr.styles';
import { RangeTime5Prmt } from '@/primitives/RangeTime5Prmt/RangeTime5Prmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import { IDuration } from '../TaskCnstr/interfaces/interfaces';

interface ITimeRangeWidgetCnstrProps {
	duration: IDuration;
	children: ReactNode;
}

export const TimeRangeWidgetCnstr: FC<ITimeRangeWidgetCnstrProps> = ({ duration, children }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenXLMin}>
				<FlexPrmt vertical gap={10} className={styles.container}>
					{children}
					<RangeTime5Prmt duration={duration} />
				</FlexPrmt>
			</MediaQuery>
			<TimeRangeWidgetLgCnstr duration={duration}>{children}</TimeRangeWidgetLgCnstr>
			<TimeRangeWidgetMdCnstr duration={duration}>{children}</TimeRangeWidgetMdCnstr>
			<TimeRangeWidgetSmCnstr duration={duration}>{children}</TimeRangeWidgetSmCnstr>
		</>
	);
};
