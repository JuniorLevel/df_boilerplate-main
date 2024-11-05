import React, { FC } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { TextTime1LgCnstr } from './TextTime1LgCnstr/TextTime1LgCnstr';
import { TextTime1SmCnstr } from './TextTime1SmCnstr/TextTime1SmCnstr';
import { useStyles, screenXLMin } from './TextTime1Cnstr.styles';
import { TextPrmt } from '@/primitives/TextPrmt/TextPrmt';
import { TimeWidgetsDateWithTimeBlock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsWeeksAndYearsPanel } from '@/primitives/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsCustomClock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';

interface ITextTime1CnstrProps {
	text: string;
	fullDate: { date: string; time: string };
}

export const TextTime1Cnstr: FC<ITextTime1CnstrProps> = ({ text, fullDate }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenXLMin}>
				<Flex gap={10} align="center" className={styles.container}>
					<div className={styles.content}>
						<TextPrmt text={text} />
					</div>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					<Flex wrap gap={10} justify="center" align="center">
						<TimeWidgetsWeeksAndYearsPanel />
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
			</MediaQuery>
			<TextTime1LgCnstr text={text} fullDate={fullDate} />
			<TextTime1SmCnstr text={text} fullDate={fullDate} />
		</>
	);
};
