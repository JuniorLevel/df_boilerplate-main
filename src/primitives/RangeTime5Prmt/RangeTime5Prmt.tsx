import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { RangeTime5LgPrmt } from './RangeTime5LgPrmt/RangeTime5LgPrmt';
import { RangeTime5MdPrmt } from './RangeTime5MdPrmt/RangeTime5MdPrmt';
import { RangeTime5SmPrmt } from './RangeTime5SmPrmt/RangeTime5SmPrmt';
import { useStyles, screenXLMin } from './RangeTime5Prmt.styles';
import { DateWithTimeBlockPrmt } from '../DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { CustomClockPrmt } from '../CustomClockPrmt/CustomClockPrmt';
import { DaysPanelPrmt } from '../DaysPanelPrmt/DaysPanelPrmt';

interface IRangeTime5PrmtProps {
	fullDate: { date: string; time: string };
}

export const RangeTime5Prmt: FC<IRangeTime5PrmtProps> = ({ fullDate }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenXLMin}>
				<Flex gap={10} justify="space-between" align="center" className={styles.container}>
					<Flex align="center" gap={25}>
						<DateWithTimeBlockPrmt fullDate={fullDate} />
						<CustomClockPrmt />
					</Flex>
					<Flex className={styles.progress}>
						<DaysPanelPrmt />
					</Flex>
					<Flex align="center" gap={25} className={styles.dateWithTimeBlock}>
						<DateWithTimeBlockPrmt fullDate={fullDate} />
						<CustomClockPrmt />
					</Flex>
				</Flex>
			</MediaQuery>
			<RangeTime5LgPrmt fullDate={fullDate} />
			<RangeTime5MdPrmt fullDate={fullDate} />
			<RangeTime5SmPrmt fullDate={fullDate} />
		</>
	);
};
