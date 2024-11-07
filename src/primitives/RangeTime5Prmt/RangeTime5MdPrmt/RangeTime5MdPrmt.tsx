import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { screenLGMax, screenSMMin } from './RangeTime5MdPrmt.styles';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';

interface IRangeTime5MdPrmtProps {
	fullDate: { date: string; time: string };
}

export const RangeTime5MdPrmt: FC<IRangeTime5MdPrmtProps> = ({ fullDate }) => (
	<MediaQuery minWidth={screenSMMin} maxWidth={screenLGMax}>
		<Flex vertical align="center" gap={10}>
			<DateWithTimeBlockPrmt fullDate={fullDate} />
			<Flex gap={10} align="center">
				<CustomClockPrmt />
				<WeeksAndYearsPanelPrmt />
				<CustomClockPrmt />
			</Flex>
			<DateWithTimeBlockPrmt fullDate={fullDate} />
		</Flex>
	</MediaQuery>
);
