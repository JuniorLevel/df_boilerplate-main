import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { screenLGMax, screenSMMin } from './RangeTime5MdPrmt.styles';
import { TimeWidgetsDateWithTimeBlock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsCustomClock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '@/primitives/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

interface IRangeTime5MdPrmtProps {
	fullDate: { date: string; time: string };
}

export const RangeTime5MdPrmt: FC<IRangeTime5MdPrmtProps> = ({ fullDate }) => (
	<MediaQuery minWidth={screenSMMin} maxWidth={screenLGMax}>
		<Flex vertical align="center" gap={10}>
			<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
			<Flex gap={10} align="center">
				<TimeWidgetsCustomClock />
				<TimeWidgetsWeeksAndYearsPanel />
				<TimeWidgetsCustomClock />
			</Flex>
			<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
		</Flex>
	</MediaQuery>
);
