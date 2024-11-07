import { Flex } from 'antd';
import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { useStyles, screenMDMax, screenSMMin } from './RangeTime4MdPrmt.styles';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';

interface IRangeTime4MdPrmtProps {
	fullDate: { date: string; time: string };
}

export const RangeTime4MdPrmt: FC<IRangeTime4MdPrmtProps> = ({ fullDate }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenSMMin} maxWidth={screenMDMax}>
			<Flex vertical align="center" gap={10} className={styles.container}>
				<DateWithTimeBlockPrmt fullDate={fullDate} />
				<Flex gap={50} align="center">
					<CustomClockPrmt />
					<WeeksAndYearsPanelPrmt />
					<CustomClockPrmt />
				</Flex>
				<DateWithTimeBlockPrmt fullDate={fullDate} />
			</Flex>
		</MediaQuery>
	);
};
