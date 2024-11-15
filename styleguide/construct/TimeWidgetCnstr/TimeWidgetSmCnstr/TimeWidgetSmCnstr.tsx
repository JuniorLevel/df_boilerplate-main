import React, { FC, ReactNode } from 'react';
import MediaQuery from 'react-responsive';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { useStyles, screenMDMax } from './TimeWidgetSmCnstr.styles';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';

interface ITimeWidgetSmCnstrProps {
	durationStart?: string;
	children: ReactNode;
}

export const TimeWidgetSmCnstr: FC<ITimeWidgetSmCnstrProps> = ({ durationStart, children }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenMDMax}>
			<FlexPrmt vertical align="center" gap={10} className={styles.container} justify="center">
				<div className={styles.content}>{children}</div>
				<FlexPrmt vertical gap={10}>
					<FlexPrmt vertical align="center" gap={10}>
						<DateWithTimeBlockPrmt durationTime={durationStart} />
						<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
					</FlexPrmt>
					<FlexPrmt vertical align="center" gap={10}>
						<DateWithTimeBlockPrmt durationTime={durationStart} />
						<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
					</FlexPrmt>
					<FlexPrmt justify="center">
						<WeeksAndYearsPanelPrmt />
					</FlexPrmt>
				</FlexPrmt>
			</FlexPrmt>
		</MediaQuery>
	);
};
