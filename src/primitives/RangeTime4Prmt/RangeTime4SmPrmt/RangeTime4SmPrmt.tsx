import React, { FC } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { useStyles, screenSMMax } from './RangeTime4SmPrmt.styles';
import { TimeWidgetsDateWithTimeBlock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsCustomClock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '@/primitives/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

interface IRangeTime4SmPrmtProps {
	fullDate: { date: string; time: string };
}

export const RangeTime4SmPrmt: FC<IRangeTime4SmPrmtProps> = ({ fullDate }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenSMMax}>
			<Flex vertical gap={10} className={styles.container}>
				<Flex vertical align="center" gap={10}>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					<TimeWidgetsCustomClock />
				</Flex>
				<Flex vertical align="center" gap={10}>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					<TimeWidgetsCustomClock />
				</Flex>
				<Flex justify="center">
					<TimeWidgetsWeeksAndYearsPanel />
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
