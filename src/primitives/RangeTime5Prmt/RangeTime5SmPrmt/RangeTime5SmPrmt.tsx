import { Flex } from 'antd';
import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { screenSMMax } from './RangeTime5SmPrmt.styles';
import { TimeWidgetsDateWithTimeBlock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsCustomClock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '@/primitives/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

interface IRangeTime5SmPrmtProps {
	fullDate: { date: string; time: string };
}

export const RangeTime5SmPrmt: FC<IRangeTime5SmPrmtProps> = ({ fullDate }) => (
	<MediaQuery maxWidth={screenSMMax}>
		<Flex vertical gap={10}>
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
