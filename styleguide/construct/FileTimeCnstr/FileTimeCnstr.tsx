import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { useStyles, screenXLMin } from './FileTimeCnstr.styles';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { AvatarPrmt } from '@/primitives/AvatarPrmt/AvatarPrmt';
import { TextPrmt } from '@/primitives/TextPrmt/TextPrmt';
import { FileTimeMdCnstr } from './FileTimeMdCnstr/FileTimeMdCnstr';
import { FileTimeSmCnstr } from './FileTimeSmCnstr/FileTimeSmCnstr';

interface IFileTimeCnstrProps {
	durationStart?: string;
	fio: string;
	fileName: string;
}

export const FileTimeCnstr: FC<IFileTimeCnstrProps> = ({ fio, fileName, durationStart }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenXLMin}>
				<FlexPrmt gap={10} align="center" className={styles.container}>
					<FlexPrmt gap={10} align="center" className={styles.content}>
						<TextPrmt text={fileName} />
						<AvatarPrmt className={styles.avatar}>{fio}</AvatarPrmt>
					</FlexPrmt>
					<DateWithTimeBlockPrmt durationTime={durationStart} />
					<FlexPrmt gap={10} align="center">
						<WeeksAndYearsPanelPrmt />
						<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
					</FlexPrmt>
				</FlexPrmt>
			</MediaQuery>
			<FileTimeMdCnstr durationStart={durationStart} fio={fio} fileName={fileName} />
			<FileTimeSmCnstr durationStart={durationStart} fio={fio} fileName={fileName} />
		</>
	);
};
