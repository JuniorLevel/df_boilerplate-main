import React, { FC, ReactNode } from 'react';
import MediaQuery from 'react-responsive';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { useStyles, screenLGMin, screenXLMax } from './TimeWidgetLgCnstr.styles';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';

interface ITimeWidgetLgCnstrProps {
	durationStart?: string;
	children: ReactNode;
}

export const TimeWidgetLgCnstr: FC<ITimeWidgetLgCnstrProps> = ({ durationStart, children }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenLGMin} maxWidth={screenXLMax}>
			<FlexPrmt wrap gap={10} align="center" justify="center" className={styles.container}>
				<div className={styles.content}>{children}</div>
				<DateWithTimeBlockPrmt durationTime={durationStart} />
				<FlexPrmt gap={10} align="center">
					<WeeksAndYearsPanelPrmt />
					<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
				</FlexPrmt>
			</FlexPrmt>
		</MediaQuery>
	);
};
