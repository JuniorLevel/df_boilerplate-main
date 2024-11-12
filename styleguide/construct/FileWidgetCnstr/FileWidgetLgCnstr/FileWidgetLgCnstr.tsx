import React, { FC } from 'react';
import { useStyles, screenLGMin, screenXLMax } from './FileWidgetLgCnstr.styles';
import { ReactNode } from '@tanstack/react-router';
import MediaQuery from 'react-responsive';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { AvatarPrmt } from '@/primitives/AvatarPrmt/AvatarPrmt';

interface IFileWidgetLgCnstrProps {
	fullDate: { date: string; time: string };
	fio: string;
	children: ReactNode;
}

export const FileWidgetLgCnstr: FC<IFileWidgetLgCnstrProps> = ({ fullDate, fio, children }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenLGMin} maxWidth={screenXLMax}>
			<FlexPrmt wrap gap={10} align="center" justify="center" className={styles.container}>
				<FlexPrmt gap={10} align="center" className={styles.content}>
					<div className={styles.children}>{children}</div>
					<AvatarPrmt className={styles.avatar}>{fio}</AvatarPrmt>
				</FlexPrmt>
				<FlexPrmt gap={10} align="center">
					<DateWithTimeBlockPrmt fullDate={fullDate} />
					<WeeksAndYearsPanelPrmt />
					<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
				</FlexPrmt>
			</FlexPrmt>
		</MediaQuery>
	);
};
