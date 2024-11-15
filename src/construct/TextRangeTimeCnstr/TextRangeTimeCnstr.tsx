import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { TextRangeTimeLgCnstr } from './TextRangeTimeLgCnstr/TextRangeTimeLgCnstr';
import { TextRangeTimeMdCnstr } from './TextRangeTimeMdCnstr/TextRangeTimeMdCnstr';
import { TextPrmt } from '../../primitives/TextPrmt/TextPrmt';
import { TextRangeTimeSmCnstr } from './TextRangeTimeSmCnstr/TextRangeTimeSmCnstr';
import { useStyles, screenXLMin } from './TextRangeTimeCnstr.styles';
import { RangeTime5Prmt } from '@/primitives/RangeTime5Prmt/RangeTime5Prmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import { IDuration } from '../TaskCnstr/interfaces/interfaces';

interface ITextRangeTimeCnstrProps {
	text: string;
	duration?: IDuration;
}

export const TextRangeTimeCnstr: FC<ITextRangeTimeCnstrProps> = ({ text, duration }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenXLMin}>
				<FlexPrmt vertical gap={10} className={styles.container}>
					<TextPrmt text={text} />
					<RangeTime5Prmt duration={duration} />
				</FlexPrmt>
			</MediaQuery>
			<TextRangeTimeLgCnstr text={text} duration={duration} />
			<TextRangeTimeMdCnstr text={text} duration={duration} />
			<TextRangeTimeSmCnstr text={text} duration={duration} />
		</>
	);
};
