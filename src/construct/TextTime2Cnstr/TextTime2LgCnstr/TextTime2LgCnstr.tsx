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
	durationStart?: string;
}

export const TextTime2LgCnstr: FC<ITextTime2LgCnstrProps> = ({ text, durationStart }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenSMMin} maxWidth={screenXLMax}>
			<FlexPrmt gap={10} align="center" className={styles.container}>
				<FlexPrmt className={styles.content}>
					<TextPrmt text={text} />
				</FlexPrmt>
				<FlexPrmt wrap vertical justify="center" gap={10}>
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
