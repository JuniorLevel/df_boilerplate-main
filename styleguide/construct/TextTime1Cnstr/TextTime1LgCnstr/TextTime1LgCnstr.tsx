import MediaQuery from 'react-responsive';
import React, { FC } from 'react';
import { TextPrmt } from '../../../primitives/TextPrmt/TextPrmt';
import { useStyles, screenSMMin, screenXLMax } from './TextTime1LgCnstr.styles';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';

interface ITextTime1LgCnstrProps {
	text: string;
	durationStart?: string;
}

export const TextTime1LgCnstr: FC<ITextTime1LgCnstrProps> = ({ text, durationStart }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenSMMin} maxWidth={screenXLMax}>
			<FlexPrmt gap={10} align="center" className={styles.container}>
				<div className={styles.content}>
					<TextPrmt text={text} />
				</div>
				<FlexPrmt gap={10} vertical wrap justify="center">
					<DateWithTimeBlockPrmt durationTime={durationStart} />
					<FlexPrmt gap={10} vertical align="center">
						<WeeksAndYearsPanelPrmt />
						<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
					</FlexPrmt>
				</FlexPrmt>
			</FlexPrmt>
		</MediaQuery>
	);
};
