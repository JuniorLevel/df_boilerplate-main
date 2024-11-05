import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { screenLGMin, screenXLMax } from './RangeTime5LgPrmt.styles';
import { TimeWidgetsDateWithTimeBlock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsCustomClock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '@/primitives/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

interface IRangeTime5LgPrmtProps {
	fullDate: { date: string; time: string };
}

export const RangeTime5LgPrmt: FC<IRangeTime5LgPrmtProps> = ({ fullDate }) => {
	return (
		<MediaQuery minWidth={screenLGMin} maxWidth={screenXLMax}>
			<Flex gap={10} justify="space-between" align="center">
				<Flex gap={10} vertical>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				</Flex>
				<Flex vertical gap={10}>
					<TimeWidgetsCustomClock />
					<TimeWidgetsCustomClock />
				</Flex>
				<Flex>
					<TimeWidgetsWeeksAndYearsPanel />
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
