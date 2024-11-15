import { Flex } from 'antd';
import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { screenSMMax } from './RangeTime5SmPrmt.styles';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { IDuration } from '@/construct/TaskCnstr/interfaces/interfaces';

interface IRangeTime5SmPrmtProps {
	duration?: IDuration;
}

export const RangeTime5SmPrmt: FC<IRangeTime5SmPrmtProps> = ({ duration }) => (
	<MediaQuery maxWidth={screenSMMax}>
		<Flex vertical gap={10}>
			<Flex vertical align="center" gap={10}>
				<DateWithTimeBlockPrmt durationTime={duration?.start} />
				<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
			</Flex>
			<Flex vertical align="center" gap={10}>
				<DateWithTimeBlockPrmt durationTime={duration?.end} />
				<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
			</Flex>
			<Flex justify="center">
				<WeeksAndYearsPanelPrmt />
			</Flex>
		</Flex>
	</MediaQuery>
);
