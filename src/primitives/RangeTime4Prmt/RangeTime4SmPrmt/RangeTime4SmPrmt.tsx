import React, { FC } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { useStyles, screenSMMax } from './RangeTime4SmPrmt.styles';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';

interface IRangeTime4SmPrmtProps {
	fullDate: { date: string; time: string };
}

export const RangeTime4SmPrmt: FC<IRangeTime4SmPrmtProps> = ({ fullDate }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenSMMax}>
			<Flex vertical gap={10} className={styles.container}>
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
};
