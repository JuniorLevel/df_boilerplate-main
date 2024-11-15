import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { TextPrmt } from '../../../primitives/TextPrmt/TextPrmt';
import { useStyles, screenMDMax } from './TextRangeTimeSmCnstr.styles';
import { RangeTime5Prmt } from '@/primitives/RangeTime5Prmt/RangeTime5Prmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import { IDuration } from '@/construct/TaskCnstr/interfaces/interfaces';

interface ITextRangeTimeSmCnstrProps {
	text: string;
	duration?: IDuration;
}

export const TextRangeTimeSmCnstr: FC<ITextRangeTimeSmCnstrProps> = ({ text, duration }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenMDMax}>
			<FlexPrmt vertical gap={10} className={styles.container}>
				<TextPrmt text={text} />
				<RangeTime5Prmt duration={duration} />
			</FlexPrmt>
		</MediaQuery>
	);
};
