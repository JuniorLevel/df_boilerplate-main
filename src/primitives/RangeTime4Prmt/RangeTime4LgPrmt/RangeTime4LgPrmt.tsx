import { Flex } from 'antd';
import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { useStyles, screenMDMin, screenLGMax } from './RangeTime4LgPrmt.styles';
import { TimeWidgetsDateWithTimeBlock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsCustomClock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsDaysPanel } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDaysPanel/TimeWidgetsDaysPanel';

interface IRangeTime4LgPrmtProps {
	fullDate: { date: string; time: string };
}

export const RangeTime4LgPrmt: FC<IRangeTime4LgPrmtProps> = ({ fullDate }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenMDMin} maxWidth={screenLGMax}>
			<Flex vertical gap={10} align="center" className={styles.container}>
				<Flex gap={10}>
					<Flex vertical justify="center" align="center" gap={10}>
						<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
						<Flex wrap align="center" gap={10}>
							<Flex wrap gap={10}>
								<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
							</Flex>
						</Flex>
					</Flex>
					<Flex vertical gap={10}>
						<TimeWidgetsCustomClock />
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
				<Flex className={styles.progress}>
					<TimeWidgetsDaysPanel />
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
