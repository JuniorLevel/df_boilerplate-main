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
					<Flex align="center" gap={35}>
						<DateWithTimeBlockPrmt fullDate={fullDate} />
						<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
					</Flex>
					<Flex className={styles.progress}>
						<DaysPanelPrmt size={{ width: 8, height: 40 }} percent={100} steps={31} showInfo={false} />
					</Flex>
					<Flex align="center" gap={35} className={styles.dateWithTimeBlock}>
						<DateWithTimeBlockPrmt fullDate={fullDate} />
						<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
					</Flex>
				</Flex>
			</MediaQuery>
			<RangeTime5LgPrmt fullDate={fullDate} />
			<RangeTime5MdPrmt fullDate={fullDate} />
			<RangeTime5SmPrmt fullDate={fullDate} />
		</>
	);
};
