import { ReactNode } from '@tanstack/react-router';
import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { useStyles, screenXLMin } from './FileWidgetCnstr.styles';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { AvatarPrmt } from '@/primitives/AvatarPrmt/AvatarPrmt';
import { FileWidgetLgCnstr } from './FileWidgetLgCnstr/FileWidgetLgCnstr';
import { FileWidgetMdCnstr } from './FileWidgetMdCnstr/FileWidgetMdCnstr';
import { FileWidgetSmCnstr } from './FileWidgetSmCnstr/FileWidgetSmCnstr';

interface IFileWidgetCnstrProps {
	fullDate: { date: string; time: string };
	fio: string;
	children: ReactNode;
}

export const FileWidgetCnstr: FC<IFileWidgetCnstrProps> = ({ fullDate, fio, children }) => {
	const { styles } = useStyles();
	return (
		<>
			<MediaQuery minWidth={screenXLMin}>
				<FlexPrmt gap={10} align="center" className={styles.container}>
					<FlexPrmt gap={10} align="center" className={styles.content}>
						<div className={styles.children}>{children}</div>
						<AvatarPrmt className={styles.avatar}>{fio}</AvatarPrmt>
					</FlexPrmt>
					<DateWithTimeBlockPrmt fullDate={fullDate} />
					<FlexPrmt gap={10} align="center">
						<WeeksAndYearsPanelPrmt />
						<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
					</FlexPrmt>
				</FlexPrmt>
			</MediaQuery>
			<FileWidgetLgCnstr fullDate={fullDate} fio={fio}>
				{children}
			</FileWidgetLgCnstr>
			<FileWidgetMdCnstr fullDate={fullDate} fio={fio}>
				{children}
			</FileWidgetMdCnstr>
			<FileWidgetSmCnstr fullDate={fullDate} fio={fio}>
				{children}
			</FileWidgetSmCnstr>
		</>
	);
};
