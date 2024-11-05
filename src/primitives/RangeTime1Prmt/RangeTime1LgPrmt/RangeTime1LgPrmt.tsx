import React, { FC } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { useStyles, screenLGMax } from './RangeTime1LgPrmt.styles';
import { TimeWidgetsDateWithTimeBlock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsWeeksAndYearsPanel } from '@/primitives/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

interface IRangeTime1LgPrmtProps {
	fullDate: { date: string; time: string };
}

export const RangeTime1LgPrmt: FC<IRangeTime1LgPrmtProps> = ({ fullDate }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenLGMax}>
			<Flex justify="center" wrap className={styles.container}>
				<Flex vertical wrap gap={10} justify="center" align="center" className={styles.item}>
					<Flex wrap gap={10} justify="center">
						<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					</Flex>
					<TimeWidgetsWeeksAndYearsPanel />
				</Flex>
				<Flex vertical wrap gap={10} justify="center" align="center" className={styles.item}>
					<Flex wrap gap={10} justify="center">
						<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					</Flex>
					<TimeWidgetsWeeksAndYearsPanel />
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
