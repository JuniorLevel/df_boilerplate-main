import React, { FC } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { TextPrmt } from '../../../primitives/TextPrmt/TextPrmt';
import { useStyles, screenSMMax } from './TextTime1SmCnstr.styles';
import { TimeWidgetsDateWithTimeBlock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsWeeksAndYearsPanel } from '@/primitives/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsCustomClock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';

interface ITextTime1SmCnstrProps {
	text: string;
	fullDate: any;
}

export const TextTime1SmCnstr: FC<ITextTime1SmCnstrProps> = ({ text, fullDate }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenSMMax}>
			<Flex gap={10} align="center" vertical className={styles.container}>
				<Flex className={styles.content}>
					<TextPrmt text={text} />
				</Flex>
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				<Flex gap={10} vertical align="center">
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsCustomClock />
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
