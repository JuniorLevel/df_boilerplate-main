import { Flex } from 'antd';
import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { useStyles, screenXXLMax } from './RangeTime2LgPrmt.styles';
import { TimeWidgetsDateWithTimeBlock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsWeeksAndYearsPanel } from '@/primitives/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

interface IRangeTime2LgPrmtProps {
	fullDate: { date: string; time: string };
}

export const RangeTime2LgPrmt: FC<IRangeTime2LgPrmtProps> = ({ fullDate }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenXXLMax}>
			<Flex wrap gap={10} justify="space-evenly" className={styles.container}>
				<Flex vertical gap={10} align="center">
					<Flex vertical gap={10} wrap justify="center">
						<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					</Flex>
					<Flex wrap gap={10} justify="center">
						<TimeWidgetsWeeksAndYearsPanel />
						<TimeWidgetsWeeksAndYearsPanel />
					</Flex>
				</Flex>
				<Flex vertical gap={10} align="center">
					<Flex wrap gap={10} justify="center">
						<TimeWidgetsWeeksAndYearsPanel />
						<TimeWidgetsWeeksAndYearsPanel />
					</Flex>
					<Flex vertical gap={10} wrap justify="center" className={styles.block}>
						<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
