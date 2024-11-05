import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import React, { FC } from 'react';
import { TextPrmt } from '../../../primitives/TextPrmt/TextPrmt';
import { useStyles, screenSMMin, screenXLMax } from './TextTime1LgCnstr.styles';
import { TimeWidgetsWeeksAndYearsPanel } from '@/primitives/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsCustomClock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsDateWithTimeBlock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITextTime1LgCnstrProps {
	text: string;
	fullDate: { date: string; time: string };
}

export const TextTime1LgCnstr: FC<ITextTime1LgCnstrProps> = ({ text, fullDate }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenSMMin} maxWidth={screenXLMax}>
			<Flex gap={10} align="center" className={styles.container}>
				<div className={styles.content}>
					<TextPrmt text={text} />
				</div>
				<Flex gap={10} vertical wrap justify="center">
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					<Flex gap={10} vertical align="center">
						<TimeWidgetsWeeksAndYearsPanel />
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
