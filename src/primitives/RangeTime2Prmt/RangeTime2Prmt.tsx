import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { useStyles, screenXXLMin } from './RangeTime2Prmt.styles';
// import { RangeTime2LgPrmt } from './RangeTime2LgPrmt/RangeTime2LgPrmt';
import { WeeksAndYearsPanelPrmt } from '../WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
// import { DateWithTimeBlockPrmt } from '../DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';

interface IRangeTime2PrmtProps {
	fullDate: { date: string; time: string };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const RangeTime2Prmt: FC<IRangeTime2PrmtProps> = ({ fullDate }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenXXLMin}>
				<Flex className={styles.container}>
					<Flex wrap align="center" justify="space-between" className={styles.item}>
						s{/* <DateWithTimeBlockPrmt fullDate={fullDate} /> */}
						<Flex gap={10}>
							<WeeksAndYearsPanelPrmt />
							<WeeksAndYearsPanelPrmt />
						</Flex>
					</Flex>
					<Flex wrap gap={10} align="center" justify="space-between" className={styles.item}>
						<Flex gap={10}>
							<WeeksAndYearsPanelPrmt />
							<WeeksAndYearsPanelPrmt />
						</Flex>
						<Flex wrap gap={10}>
							s{/* <DateWithTimeBlockPrmt fullDate={fullDate} /> */}
						</Flex>
					</Flex>
				</Flex>
			</MediaQuery>
			{/* <RangeTime2LgPrmt fullDate={fullDate} /> */}
		</>
	);
};
