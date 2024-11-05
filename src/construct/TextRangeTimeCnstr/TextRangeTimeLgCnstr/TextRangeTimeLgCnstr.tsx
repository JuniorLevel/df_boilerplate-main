import { Flex } from 'antd';
import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { TextPrmt } from '@/primitives/TextPrmt/TextPrmt';
import { screenLGMin, screenXLMax, useStyles } from './TextRangeTimeLgCnstr.styles';
import { RangeTime5Prmt } from '@/primitives/RangeTime5Prmt/RangeTime5Prmt';

interface ITextRangeTimeLgCnstrProps {
	text: string;
	fullDate: { date: string; time: string };
}

export const TextRangeTimeLgCnstr: FC<ITextRangeTimeLgCnstrProps> = ({ text, fullDate }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenLGMin} maxWidth={screenXLMax}>
			<Flex align="center" gap={10} className={styles.container} justify="center">
				<div className={styles.content}>
					<TextPrmt text={text} />
				</div>
				<RangeTime5Prmt fullDate={fullDate} />
			</Flex>
		</MediaQuery>
	);
};
