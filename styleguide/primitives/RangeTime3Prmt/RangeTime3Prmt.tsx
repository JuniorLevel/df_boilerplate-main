import React, { FC } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
// import { RangeTime3LgPrmt } from './RangeTime3LgPrmt/RangeTime3LgPrmt';
import { useStyles, screenLGMin } from './RangeTime3Prmt.styles';
// import { DateWithTimeBlockPrmt } from '../DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';

interface IRangeTime3PrmtProps {
	fullDate: { date: string; time: string };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const RangeTime3Prmt: FC<IRangeTime3PrmtProps> = ({ fullDate }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenLGMin}>
				<Flex wrap justify="space-between" align="center" className={styles.container}>
					<Flex wrap align="center">
						<Flex wrap gap={10}>
							s {/* <DateWithTimeBlockPrmt fullDate={fullDate} /> */}
						</Flex>
					</Flex>
					<Flex className={styles.panel}>
						<Flex gap={10}>
							<div className={styles.years} />
							<div className={styles.years} />
							<div className={styles.years} />
						</Flex>
					</Flex>
					<Flex wrap align="center">
						<Flex wrap gap={10}>
							s{/* <DateWithTimeBlockPrmt fullDate={fullDate} /> */}
						</Flex>
					</Flex>
				</Flex>
			</MediaQuery>
			{/* <RangeTime3LgPrmt fullDate={fullDate} /> */}
		</>
	);
};
