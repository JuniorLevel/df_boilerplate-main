import MediaQuery from 'react-responsive';
import React, { FC } from 'react';
import { TextPrmt } from '../../../primitives/TextPrmt/TextPrmt';
import { screenSMMin, screenXLMax, useStyles } from './TextTime2LgCnstr.styles';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';

interface ITextTime2LgCnstrProps {
	text: string;
	fullDate: { date: string; time: string };
}

export const TextTime2LgCnstr: FC<ITextTime2LgCnstrProps> = ({ text, fullDate }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenSMMin} maxWidth={screenXLMax}>
			<FlexPrmt gap={10} align="center" className={styles.container}>
				<FlexPrmt className={styles.content}>
					<TextPrmt text={text} />
				</FlexPrmt>
				<FlexPrmt wrap vertical justify="center" gap={10}>
					<FlexPrmt gap={10} vertical className={styles.timeBlock}>
						<DateWithTimeBlockPrmt fullDate={fullDate} />
					</FlexPrmt>
					<FlexPrmt gap={10} vertical align="center" className={styles.weeksAndYearsBlock}>
						<WeeksAndYearsPanelPrmt />
						<CustomClockPrmt />
					</FlexPrmt>
				</FlexPrmt>
			</FlexPrmt>
		</MediaQuery>
	);
};
