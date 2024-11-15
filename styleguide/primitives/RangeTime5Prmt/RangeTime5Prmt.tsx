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
import { IDuration } from '@/construct/TaskCnstr/interfaces/interfaces';

interface IRangeTime5PrmtProps {
	duration?: IDuration;
}

export const RangeTime5Prmt: FC<IRangeTime5PrmtProps> = ({ duration }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenXLMin}>
				<Flex gap={10} justify="space-between" align="center" className={styles.container}>
					<Flex align="center" gap={35}>
						<DateWithTimeBlockPrmt durationTime={duration?.start} />
						<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
					</Flex>
					<Flex className={styles.progress}>
						<DaysPanelPrmt size={{ width: 8, height: 40 }} percent={100} steps={31} showInfo={false} />
					</Flex>
					<Flex align="center" gap={35} className={styles.dateWithTimeBlock}>
						<DateWithTimeBlockPrmt durationTime={duration?.end} />
						<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
					</Flex>
				</Flex>
			</MediaQuery>
			<RangeTime5LgPrmt duration={duration} />
			<RangeTime5MdPrmt duration={duration} />
			<RangeTime5SmPrmt duration={duration} />
		</>
	);
};
