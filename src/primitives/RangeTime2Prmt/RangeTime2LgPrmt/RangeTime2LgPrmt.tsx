import { Flex } from 'antd';
import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { useStyles, screenXXLMax } from './RangeTime2LgPrmt.styles';
// import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';

interface IRangeTime2LgPrmtProps {
	fullDate: { date: string; time: string };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const RangeTime2LgPrmt: FC<IRangeTime2LgPrmtProps> = ({ fullDate }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenXXLMax}>
			<Flex wrap gap={10} justify="space-evenly" className={styles.container}>
				<Flex vertical gap={10} align="center">
					<Flex vertical gap={10} wrap justify="center">
						s{/* <DateWithTimeBlockPrmt fullDate={fullDate} /> */}
					</Flex>
					<Flex wrap gap={10} justify="center">
						<WeeksAndYearsPanelPrmt />
						<WeeksAndYearsPanelPrmt />
					</Flex>
				</Flex>
				<Flex vertical gap={10} align="center">
					<Flex wrap gap={10} justify="center">
						<WeeksAndYearsPanelPrmt />
						<WeeksAndYearsPanelPrmt />
					</Flex>
					<Flex vertical gap={10} wrap justify="center" className={styles.block}>
						s{/* <DateWithTimeBlockPrmt fullDate={fullDate} /> */}
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
