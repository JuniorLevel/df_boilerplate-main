import { Flex, Progress } from 'antd';
import React, { FC, useState } from 'react';
import MediaQuery from 'react-responsive';
import { useStyles, screenMDMax } from './Time2MdPrmt.styles';
import { TimeWidgetsDateWithTimeBlock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsWeeksAndYearsPanel } from '@/primitives/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsCustomClock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';

interface ITime2MdPrmtProps {
	fullDate: { date: string; time: string };
}

export const Time2MdPrmt: FC<ITime2MdPrmtProps> = ({ fullDate }) => {
	const [isShowWeeksPanel] = useState(false);

	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenMDMax}>
			<Flex className={styles.container} wrap align="start" justify="center" gap={5}>
				<div>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				</div>
				<Flex>
					<Flex vertical align="center" gap={10}>
						<div className={styles.panel}>
							{isShowWeeksPanel ? <TimeWidgetsWeeksAndYearsPanel /> : <Progress size={{ width: 6, height: 50 }} percent={100} steps={31} showInfo={false} />}
						</div>
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
