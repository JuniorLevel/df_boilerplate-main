import React, { FC } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
// import { RangeTime4XlPrmt } from './RangeTime4XlPrmt/RangeTime4XlPrmt';
// import { RangeTime4LgPrmt } from './RangeTime4LgPrmt/RangeTime4LgPrmt';
// import { RangeTime4MdPrmt } from './RangeTime4MdPrmt/RangeTime4MdPrmt';
// import { RangeTime4SmPrmt } from './RangeTime4SmPrmt/RangeTime4SmPrmt';
import { useStyles, screenXLMin } from './RangeTime4Prmt.styles';
// import { DateWithTimeBlockPrmt } from '../DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { CustomClockPrmt } from '../CustomClockPrmt/CustomClockPrmt';
import { DaysPanelPrmt } from '../DaysPanelPrmt/DaysPanelPrmt';

interface IRangeTime4PrmtProps {
	fullDate: { date: string; time: string };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const RangeTime4Prmt: FC<IRangeTime4PrmtProps> = ({ fullDate }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenXLMin}>
				<Flex justify="space-between" align="center" className={styles.container}>
					<Flex align="center" gap={35}>
						{/* <DateWithTimeBlockPrmt fullDate={fullDate} /> */}
						<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
					</Flex>
					<Flex className={styles.progress}>
						<DaysPanelPrmt size={{ width: 8, height: 40 }} percent={100} steps={31} showInfo={false} />
					</Flex>
					<Flex align="center" gap={35} className={styles.dateWithTimeBlock}>
						{/* <DateWithTimeBlockPrmt fullDate={fullDate} /> */}
						<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
					</Flex>
				</Flex>
			</MediaQuery>
			{/* <RangeTime4XlPrmt fullDate={fullDate} /> */}
			{/* <RangeTime4LgPrmt fullDate={fullDate} /> */}
			{/* <RangeTime4MdPrmt fullDate={fullDate} /> */}
			{/* <RangeTime4SmPrmt fullDate={fullDate} /> */}
		</>
	);
};
