import { Flex } from 'antd';
import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { useStyles, screenMDMax, screenSMMin } from './RangeTime4MdPrmt.styles';
import { TimeWidgetsDateWithTimeBlock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsCustomClock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '@/primitives/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

interface IRangeTime4MdPrmtProps {
	fullDate: { date: string; time: string };
}

export const RangeTime4MdPrmt: FC<IRangeTime4MdPrmtProps> = ({ fullDate }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenSMMin} maxWidth={screenMDMax}>
			<Flex vertical align="center" gap={10} className={styles.container}>
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				<Flex gap={50} align="center">
					<TimeWidgetsCustomClock />
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsCustomClock />
				</Flex>
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
			</Flex>
		</MediaQuery>
	);
};
