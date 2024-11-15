import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { screenLGMin, screenXLMax } from './RangeTime5LgPrmt.styles';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { IDuration } from '@/construct/TaskCnstr/interfaces/interfaces';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';

interface IRangeTime5LgPrmtProps {
	duration?: IDuration;
}

export const RangeTime5LgPrmt: FC<IRangeTime5LgPrmtProps> = ({ duration }) => {
	return (
		<MediaQuery minWidth={screenLGMin} maxWidth={screenXLMax}>
			<Flex gap={10} justify="space-between" align="center">
				<Flex gap={10} vertical>
					<DateWithTimeBlockPrmt durationTime={duration?.start} />
					<DateWithTimeBlockPrmt durationTime={duration?.end} />
				</Flex>
				<Flex vertical gap={10}>
					<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
					<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
				</Flex>
				<Flex>
					<WeeksAndYearsPanelPrmt />
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
