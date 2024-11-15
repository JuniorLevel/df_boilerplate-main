import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { screenMDMax, useStyles } from './FileWidgetSmCnstr.styles';
import { ReactNode } from '@tanstack/react-router';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { AvatarPrmt } from '@/primitives/AvatarPrmt/AvatarPrmt';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';

interface IFileWidgetSmCnstrProps {
	durationStart?: string;
	fio: string;
	children: ReactNode;
}

export const FileWidgetSmCnstr: FC<IFileWidgetSmCnstrProps> = ({ durationStart, fio, children }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenMDMax}>
			<FlexPrmt vertical align="center" gap={10} className={styles.container} justify="center">
				<FlexPrmt gap={10} align="center" className={styles.content}>
					<div className={styles.children}>{children}</div>
					<AvatarPrmt className={styles.avatar}>{fio}</AvatarPrmt>
				</FlexPrmt>
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
