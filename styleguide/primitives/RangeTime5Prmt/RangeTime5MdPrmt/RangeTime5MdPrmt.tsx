import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { screenLGMax, screenSMMin } from './RangeTime5MdPrmt.styles';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { IDuration } from '@/construct/TaskCnstr/interfaces/interfaces';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';

interface IRangeTime5MdPrmtProps {
	duration?: IDuration;
}

export const RangeTime5MdPrmt: FC<IRangeTime5MdPrmtProps> = ({ duration }) => (
	<MediaQuery minWidth={screenSMMin} maxWidth={screenLGMax}>
		<Flex vertical align="center" gap={10}>
			<DateWithTimeBlockPrmt durationTime={duration?.start} />
			<Flex gap={10} align="center">
				<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
				<WeeksAndYearsPanelPrmt />
				<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
			</Flex>
			<DateWithTimeBlockPrmt durationTime={duration?.end} />
		</Flex>
	</MediaQuery>
);
