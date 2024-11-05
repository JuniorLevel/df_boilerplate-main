import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { useStyles, screenXXLMin } from './RangeTime2Prmt.styles';
import { TimeWidgetsDateWithTimeBlock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsWeeksAndYearsPanel } from '@/primitives/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { RangeTime2LgPrmt } from './RangeTime2LgPrmt/RangeTime2LgPrmt';

interface IRangeTime2PrmtProps {
	fullDate: { date: string; time: string };
}

export const RangeTime2Prmt: FC<IRangeTime2PrmtProps> = ({ fullDate }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenXXLMin}>
				<Flex className={styles.container}>
					<Flex wrap align="center" justify="space-between" className={styles.item}>
						<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
						<Flex gap={10}>
							<TimeWidgetsWeeksAndYearsPanel />
							<TimeWidgetsWeeksAndYearsPanel />
						</Flex>
					</Flex>
					<Flex wrap gap={10} align="center" justify="space-between" className={styles.item}>
						<Flex gap={10}>
							<TimeWidgetsWeeksAndYearsPanel />
							<TimeWidgetsWeeksAndYearsPanel />
						</Flex>
						<Flex wrap gap={10}>
							<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
						</Flex>
					</Flex>
				</Flex>
			</MediaQuery>
			<RangeTime2LgPrmt fullDate={fullDate} />
		</>
	);
};
