import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { TextPrmt } from '@/primitives/TextPrmt/TextPrmt';
import { useStyles, screenLGMax, screenMDMin } from './TextRangeTimeMdCnstr.styles';
import { RangeTime5Prmt } from '@/primitives/RangeTime5Prmt/RangeTime5Prmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';

interface ITextRangeTimeMdCnstrProps {
	text: string;
	fullDate: { date: string; time: string };
}

export const TextRangeTimeMdCnstr: FC<ITextRangeTimeMdCnstrProps> = ({ text, fullDate }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenMDMin} maxWidth={screenLGMax}>
			<FlexPrmt align="center" gap={10} className={styles.container} justify="center">
				<div className={styles.content}>
					<TextPrmt text={text} />
				</div>
				<RangeTime5Prmt fullDate={fullDate} />
			</FlexPrmt>
		</MediaQuery>
	);
};
