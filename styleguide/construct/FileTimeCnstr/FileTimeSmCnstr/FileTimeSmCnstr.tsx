import React, { FC } from 'react';
import { screenMDMax, useStyles } from './FileTimeSmCnstr.styles';
import MediaQuery from 'react-responsive';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { TextPrmt } from '@/primitives/TextPrmt/TextPrmt';
import { AvatarPrmt } from '@/primitives/AvatarPrmt/AvatarPrmt';

interface IFileTimeSmCnstrProps {
	durationStart?: string;
	fio: string;
	fileName: string;
}

export const FileTimeSmCnstr: FC<IFileTimeSmCnstrProps> = ({ fio, fileName, durationStart }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenMDMax}>
			<FlexPrmt gap={10} align="center" vertical className={styles.container}>
				<FlexPrmt gap={10} align="center" className={styles.content}>
					<TextPrmt text={fileName} />
					<AvatarPrmt className={styles.avatar}>{fio}</AvatarPrmt>
				</FlexPrmt>
				<DateWithTimeBlockPrmt durationTime={durationStart} />
				<FlexPrmt gap={10} vertical align="center">
					<WeeksAndYearsPanelPrmt />
					<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
				</FlexPrmt>
			</FlexPrmt>
		</MediaQuery>
	);
};
