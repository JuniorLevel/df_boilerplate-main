import { ReactNode } from '@tanstack/react-router';
import React, { FC } from 'react';
import { screenLGMax, screenMDMin, useStyles } from './FileWidgetMdCnstr.styles';
import MediaQuery from 'react-responsive';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { AvatarPrmt } from '@/primitives/AvatarPrmt/AvatarPrmt';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';

interface IFileWidgetMdCnstrProps {
	durationStart?: string;
	fio: string;
	children: ReactNode;
}

export const FileWidgetMdCnstr: FC<IFileWidgetMdCnstrProps> = ({ durationStart, fio, children }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenMDMin} maxWidth={screenLGMax}>
			<FlexPrmt wrap align="center" gap={10} className={styles.container} justify="center">
				<FlexPrmt gap={10} align="center" className={styles.content}>
					<div className={styles.children}>{children}</div>
					<AvatarPrmt className={styles.avatar}>{fio}</AvatarPrmt>
				</FlexPrmt>
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
