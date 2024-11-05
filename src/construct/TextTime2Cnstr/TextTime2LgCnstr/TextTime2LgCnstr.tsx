import MediaQuery from 'react-responsive';
import React, { FC } from 'react';
import { Flex } from 'antd';
import { TextPrmt } from '../../../primitives/TextPrmt/TextPrmt';
import { screenSMMin, screenXLMax, useStyles } from './TextTime2LgCnstr.styles';
import { TimeWidgetsDateWithTimeBlock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsWeeksAndYearsPanel } from '@/primitives/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsCustomClock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';

interface ITextTime2LgCnstrProps {
	text: string;
	fullDate: { date: string; time: string };
}

export const TextTime2LgCnstr: FC<ITextTime2LgCnstrProps> = ({ text, fullDate }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenSMMin} maxWidth={screenXLMax}>
			<Flex gap={10} align="center" className={styles.container}>
				<Flex className={styles.content}>
					<TextPrmt text={text} />
				</Flex>
				<Flex wrap vertical justify="center" gap={10}>
					<Flex gap={10} vertical className={styles.timeBlock}>
						<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					</Flex>
					<Flex gap={10} vertical align="center" className={styles.weeksAndYearsBlock}>
						<TimeWidgetsWeeksAndYearsPanel />
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
