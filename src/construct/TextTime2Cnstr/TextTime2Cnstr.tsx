import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { TextTime2LgCnstr } from './TextTime2LgCnstr/TextTime2LgCnstr';
import { TextTime2SmCnstr } from './TextTime2SmCnstr/TextTime2SmCnstr';
import { TextPrmt } from '../../primitives/TextPrmt/TextPrmt';
import { useStyles, screenXLMin } from './TextTime2Cnstr.styles';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';

interface ITextTime2CnstrProps {
	text: string;
	fullDate: { date: string; time: string };
}

export const TextTime2Cnstr: FC<ITextTime2CnstrProps> = ({ text, fullDate }) => {
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
						<CustomClockPrmt />
					</FlexPrmt>
				</FlexPrmt>
			</MediaQuery>
			<TextTime2LgCnstr text={text} fullDate={fullDate} />
			<TextTime2SmCnstr text={text} fullDate={fullDate} />
		</>
	);
};
