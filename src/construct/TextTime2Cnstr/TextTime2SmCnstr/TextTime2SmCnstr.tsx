import React, { FC } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { TextPrmt } from '../../../primitives/TextPrmt/TextPrmt';
import { useStyles, screenSMMax } from './TextTime2SmCnstr.styles';
import { TimeWidgetsDateWithTimeBlock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsWeeksAndYearsPanel } from '@/primitives/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsCustomClock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';

interface ITextTime2SmCnstrProps {
	text: string;
	fullDate: { date: string; time: string };
}

export const TextTime2SmCnstr: FC<ITextTime2SmCnstrProps> = ({ text, fullDate }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenSMMax}>
			<Flex gap={10} align="center" vertical className={styles.container}>
				<Flex className={styles.content}>
					<TextPrmt text={text} />
				</Flex>
				<Flex gap={10} vertical align="center">
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
