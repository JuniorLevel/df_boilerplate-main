import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { TextRangeTimeLgCnstr } from './TextRangeTimeLgCnstr/TextRangeTimeLgCnstr';
import { TextRangeTimeMdCnstr } from './TextRangeTimeMdCnstr/TextRangeTimeMdCnstr';
import { TextPrmt } from '../../primitives/TextPrmt/TextPrmt';
import { TextRangeTimeSmCnstr } from './TextRangeTimeSmCnstr/TextRangeTimeSmCnstr';
import { useStyles, screenXLMin } from './TextRangeTimeCnstr.styles';
import { RangeTime5Prmt } from '@/primitives/RangeTime5Prmt/RangeTime5Prmt';

interface ITextRangeTimeCnstrProps {
	text: string;
	fullDate: { date: string; time: string };
}

export const TextRangeTimeCnstr: FC<ITextRangeTimeCnstrProps> = ({ text, fullDate }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenXLMin}>
				<Flex vertical gap={10} className={styles.container}>
					<TextPrmt text={text} />
					<RangeTime5Prmt fullDate={fullDate} />
				</Flex>
			</MediaQuery>
			<TextRangeTimeLgCnstr text={text} fullDate={fullDate} />
			<TextRangeTimeMdCnstr text={text} fullDate={fullDate} />
			<TextRangeTimeSmCnstr text={text} fullDate={fullDate} />
		</>
	);
};
