import React, { FC } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { useStyles, screenLGMin } from './RangeTime1Prmt.styles';
import { TimeWidgetsDateWithTimeBlock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsWeeksAndYearsPanel } from '@/primitives/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { RangeTime1LgPrmt } from './RangeTime1LgPrmt/RangeTime1LgPrmt';

interface IRangeTime1PrmtProps {
	fullDate: { date: string; time: string };
}

export const RangeTime1Prmt: FC<IRangeTime1PrmtProps> = ({ fullDate }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenLGMin}>
				<Flex className={styles.container}>
					<Flex gap={10} align="center" justify="space-between" className={styles.item}>
						<Flex gap={10}>
							<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
						</Flex>
						<TimeWidgetsWeeksAndYearsPanel />
					</Flex>
					<Flex gap={10} align="center" justify="space-between" className={styles.item}>
						<TimeWidgetsWeeksAndYearsPanel />
						<Flex gap={10}>
							<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
						</Flex>
					</Flex>
				</Flex>
			</MediaQuery>
			<RangeTime1LgPrmt fullDate={fullDate} />
		</>
	);
};
