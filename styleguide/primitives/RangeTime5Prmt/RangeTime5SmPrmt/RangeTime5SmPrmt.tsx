import { Flex } from 'antd';
import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { screenSMMax } from './RangeTime5SmPrmt.styles';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';

interface IRangeTime5SmPrmtProps {
	fullDate: { date: string; time: string };
}

export const RangeTime5SmPrmt: FC<IRangeTime5SmPrmtProps> = ({ fullDate }) => (
	<MediaQuery maxWidth={screenSMMax}>
		<Flex vertical gap={10}>
			<Flex vertical align="center" gap={10}>
				<DateWithTimeBlockPrmt fullDate={fullDate} />
				<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
			</Flex>
			<Flex vertical align="center" gap={10}>
				<DateWithTimeBlockPrmt fullDate={fullDate} />
				<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
			</Flex>
			<Flex justify="center">
				<WeeksAndYearsPanelPrmt />
			</Flex>
		</Flex>
	</MediaQuery>
);
