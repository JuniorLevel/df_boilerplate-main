import React, { FC, ReactNode } from 'react';
import MediaQuery from 'react-responsive';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { useStyles, screenLGMax, screenMDMin } from './TimeWidgetMdCnstr.styles';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';

interface ITimeWidgetMdCnstrProps {
	durationStart?: string;
	children: ReactNode;
}

export const TimeWidgetMdCnstr: FC<ITimeWidgetMdCnstrProps> = ({ durationStart, children }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenMDMin} maxWidth={screenLGMax}>
			<FlexPrmt wrap align="center" gap={10} className={styles.container} justify="center">
				<div className={styles.content}>{children}</div>
				<FlexPrmt vertical align="center" gap={10}>
					<DateWithTimeBlockPrmt durationTime={durationStart} />
					<FlexPrmt gap={50} align="center">
						<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
						<WeeksAndYearsPanelPrmt />
						<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
					</FlexPrmt>
					<DateWithTimeBlockPrmt durationTime={durationStart} />
				</FlexPrmt>
			</FlexPrmt>
		</MediaQuery>
	);
};
