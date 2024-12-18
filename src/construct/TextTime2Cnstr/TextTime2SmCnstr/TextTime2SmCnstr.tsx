import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { TextPrmt } from '../../../primitives/TextPrmt/TextPrmt';
import { useStyles, screenSMMax } from './TextTime2SmCnstr.styles';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';

interface ITextTime2SmCnstrProps {
	text: string;
	durationStart?: string;
}

export const TextTime2SmCnstr: FC<ITextTime2SmCnstrProps> = ({ text, durationStart }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenSMMax}>
			<FlexPrmt gap={10} align="center" vertical className={styles.container}>
				<FlexPrmt className={styles.content}>
					<TextPrmt text={text} />
				</FlexPrmt>
				<FlexPrmt gap={10} vertical align="center">
					<FlexPrmt gap={10} vertical className={styles.timeBlock}>
						<DateWithTimeBlockPrmt durationTime={durationStart} />
					</FlexPrmt>
					<FlexPrmt gap={10} vertical align="center" className={styles.weeksAndYearsBlock}>
						<WeeksAndYearsPanelPrmt />
						<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
					</FlexPrmt>
				</FlexPrmt>
			</FlexPrmt>
		</MediaQuery>
	);
};
