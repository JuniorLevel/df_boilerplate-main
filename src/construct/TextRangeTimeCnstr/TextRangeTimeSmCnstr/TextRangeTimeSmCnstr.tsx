import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { TextPrmt } from '../../../primitives/TextPrmt/TextPrmt';
import { useStyles, screenMDMax } from './TextRangeTimeSmCnstr.styles';
import { RangeTime5Prmt } from '@/primitives/RangeTime5Prmt/RangeTime5Prmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';

interface ITextRangeTimeSmCnstrProps {
	text: string;
	fullDate: { date: string; time: string };
}

export const TextRangeTimeSmCnstr: FC<ITextRangeTimeSmCnstrProps> = ({ text, fullDate }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenMDMax}>
			<FlexPrmt vertical gap={10} className={styles.container}>
				<TextPrmt text={text} />
				<RangeTime5Prmt fullDate={fullDate} />
			</FlexPrmt>
		</MediaQuery>
	);
};
