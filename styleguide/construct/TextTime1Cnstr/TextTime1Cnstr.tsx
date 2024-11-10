import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { TextTime1LgCnstr } from './TextTime1LgCnstr/TextTime1LgCnstr';
import { TextTime1SmCnstr } from './TextTime1SmCnstr/TextTime1SmCnstr';
import { useStyles, screenXLMin } from './TextTime1Cnstr.styles';
import { TextPrmt } from '@/primitives/TextPrmt/TextPrmt';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';

interface ITextTime1CnstrProps {
	text: string;
	fullDate: { date: string; time: string };
}

export const TextTime1Cnstr: FC<ITextTime1CnstrProps> = ({ text, fullDate }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenXLMin}>
				<FlexPrmt gap={10} align="center" className={styles.container}>
					<div className={styles.content}>
						<TextPrmt text={text} />
					</div>
					<DateWithTimeBlockPrmt fullDate={fullDate} />
					<FlexPrmt wrap gap={10} justify="center" align="center">
						<WeeksAndYearsPanelPrmt />
						<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
					</FlexPrmt>
				</FlexPrmt>
			</MediaQuery>
			<TextTime1LgCnstr text={text} fullDate={fullDate} />
			<TextTime1SmCnstr text={text} fullDate={fullDate} />
		</>
	);
};
