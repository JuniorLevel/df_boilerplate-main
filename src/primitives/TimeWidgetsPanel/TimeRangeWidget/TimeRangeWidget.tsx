import React, { FC, ReactNode } from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { TimeRangeWidgetLG } from './TimeRangeWidgetLG/TimeRangeWidgetLG';
import { TimeRangeWidgetMD } from './TimeRangeWidgetMD/TimeRangeWidgetMD';
import { TimeRangeWidgetSM } from './TimeRangeWidgetSM/TimeRangeWidgetSM';
import { useStyles, screenXLMin } from './TimeRangeWidget.styles';
import { RangeTime5Prmt } from '@/primitives/RangeTime5Prmt/RangeTime5Prmt';

interface ITimeRangeWidgetProps {
	fullDate: { date: string; time: string };
	children: ReactNode;
}

export const TimeRangeWidget: FC<ITimeRangeWidgetProps> = ({ fullDate, children }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenXLMin}>
				<Flex vertical gap={10} className={styles.container}>
					{children}
					<RangeTime5Prmt fullDate={fullDate} />
				</Flex>
			</MediaQuery>
			<TimeRangeWidgetLG fullDate={fullDate}>{children}</TimeRangeWidgetLG>
			<TimeRangeWidgetMD fullDate={fullDate}>{children}</TimeRangeWidgetMD>
			<TimeRangeWidgetSM fullDate={fullDate}>{children}</TimeRangeWidgetSM>
		</>
	);
};
