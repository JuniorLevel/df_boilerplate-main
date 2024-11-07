import { Flex, Progress } from 'antd';
import React, { FC, useState } from 'react';
import MediaQuery from 'react-responsive';
import { useStyles, screenMDMax } from './Time2MdPrmt.styles';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { WeeksAndYearsPanelPrmt } from '@/primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { CustomClockPrmt } from '@/primitives/CustomClockPrmt/CustomClockPrmt';

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
					<DateWithTimeBlockPrmt fullDate={fullDate} />
				</div>
				<Flex>
					<Flex vertical align="center" gap={10}>
						<div className={styles.panel}>
							{isShowWeeksPanel ? <WeeksAndYearsPanelPrmt /> : <Progress size={{ width: 6, height: 50 }} percent={100} steps={31} showInfo={false} />}
						</div>
						<CustomClockPrmt />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
