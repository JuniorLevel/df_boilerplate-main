import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { TextTime2LgCnstr } from './TextTime2LgCnstr/TextTime2LgCnstr';
import { TextTime2SmCnstr } from './TextTime2SmCnstr/TextTime2SmCnstr';
import { TextPrmt } from '../../primitives/TextPrmt/TextPrmt';
import { useStyles, screenXLMin } from './TextTime2Cnstr.styles';
import { TimeWidgetsDateWithTimeBlock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsWeeksAndYearsPanel } from '@/primitives/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsCustomClock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';

interface ITextTime2CnstrProps {
	text: string;
	fullDate: { date: string; time: string };
}

export const TextTime2Cnstr: FC<ITextTime2CnstrProps> = ({ text, fullDate }) => {
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
			<TextTime2LgCnstr text={text} fullDate={fullDate} />
			<TextTime2SmCnstr text={text} fullDate={fullDate} />
		</>
	);
};
