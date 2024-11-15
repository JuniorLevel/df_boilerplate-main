import React, { FC } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { useStyles, screenLGMin } from './RangeTime1Prmt.styles';
// import { RangeTime1LgPrmt } from './RangeTime1LgPrmt/RangeTime1LgPrmt';
// import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';

interface IRangeTime1PrmtProps {
	fullDate: { date: string; time: string };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const RangeTime1Prmt: FC<IRangeTime1PrmtProps> = ({ fullDate }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenLGMin}>
				<Flex className={styles.container}>
					<Flex gap={10} align="center" justify="space-between" className={styles.item}>
						<Flex gap={10}>s {/* <DateWithTimeBlockPrmt fullDate={fullDate} /> */}</Flex>
						<WeeksAndYearsPanelPrmt />
					</Flex>
					<Flex gap={10} align="center" justify="space-between" className={styles.item}>
						<WeeksAndYearsPanelPrmt />
						<Flex gap={10}>s{/* <DateWithTimeBlockPrmt fullDate={fullDate} /> */}</Flex>
					</Flex>
				</Flex>
			</MediaQuery>
			{/* <RangeTime1LgPrmt fullDate={fullDate} /> */}
		</>
	);
};
