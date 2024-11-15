import { Flex } from 'antd';
import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { useStyles, screenMDMin, screenLGMax } from './RangeTime4LgPrmt.styles';
// import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';
import { DaysPanelPrmt } from '@/primitives/DaysPanelPrmt/DaysPanelPrmt';

interface IRangeTime4LgPrmtProps {
	fullDate: { date: string; time: string };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const RangeTime4LgPrmt: FC<IRangeTime4LgPrmtProps> = ({ fullDate }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenMDMin} maxWidth={screenLGMax}>
			<Flex vertical gap={10} align="center" className={styles.container}>
				<Flex gap={10}>
					<Flex vertical justify="center" align="center" gap={10}>
						{/* <DateWithTimeBlockPrmt fullDate={fullDate} /> */}
						<Flex wrap align="center" gap={10}>
							<Flex wrap gap={10}>
								s{/* <DateWithTimeBlockPrmt fullDate={fullDate} /> */}
							</Flex>
						</Flex>
					</Flex>
					<Flex vertical gap={10}>
						<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
						<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
					</Flex>
				</Flex>
				<Flex className={styles.progress}>
					<DaysPanelPrmt size={{ width: 8, height: 40 }} percent={100} steps={31} showInfo={false} />
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
