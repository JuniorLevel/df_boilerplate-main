import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { TextRangeTimeLgCnstr } from './TextRangeTimeLgCnstr/TextRangeTimeLgCnstr';
import { TextRangeTimeMdCnstr } from './TextRangeTimeMdCnstr/TextRangeTimeMdCnstr';
import { TextPrmt } from '../../primitives/TextPrmt/TextPrmt';
import { TextRangeTimeSmCnstr } from './TextRangeTimeSmCnstr/TextRangeTimeSmCnstr';
import { useStyles, screenXLMin } from './TextRangeTimeCnstr.styles';
import { RangeTime5Prmt } from '@/primitives/RangeTime5Prmt/RangeTime5Prmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';

interface ITextRangeTimeCnstrProps {
	text: string;
	fullDate: { date: string; time: string };
}

export const TextRangeTimeCnstr: FC<ITextRangeTimeCnstrProps> = ({ text, fullDate }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenXLMin}>
				<FlexPrmt vertical gap={10} className={styles.container}>
					<TextPrmt text={text} />
					<RangeTime5Prmt fullDate={fullDate} />
				</FlexPrmt>
			</MediaQuery>
			<TextRangeTimeLgCnstr text={text} fullDate={fullDate} />
			<TextRangeTimeMdCnstr text={text} fullDate={fullDate} />
			<TextRangeTimeSmCnstr text={text} fullDate={fullDate} />
		</>
	);
};
