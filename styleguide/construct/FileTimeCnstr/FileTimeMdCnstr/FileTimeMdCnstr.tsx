import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { useStyles, screenMDMin, screenXLMax } from './FileTimeMdCnstr.styles';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { AvatarPrmt } from '@/primitives/AvatarPrmt/AvatarPrmt';
import { TextPrmt } from '@/primitives/TextPrmt/TextPrmt';

interface IFileTimeMdCnstrProps {
	fullDate: { date: string; time: string };
	fio: string;
	text: string;
}

export const FileTimeMdCnstr: FC<IFileTimeMdCnstrProps> = ({ fullDate, fio, text }) => {
	const { styles } = useStyles();
	return (
		<MediaQuery minWidth={screenMDMin} maxWidth={screenXLMax}>
			<FlexPrmt wrap gap={10} align="center" justify="center" className={styles.container}>
				<FlexPrmt gap={10} align="center" className={styles.content}>
					<TextPrmt text={text} />
					<AvatarPrmt className={styles.avatar}>{fio}</AvatarPrmt>
				</FlexPrmt>
				<DateWithTimeBlockPrmt fullDate={fullDate} />
				<FlexPrmt gap={10} align="center">
					<WeeksAndYearsPanelPrmt />
					<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
				</FlexPrmt>
			</FlexPrmt>
		</MediaQuery>
	);
};
