import React, { FC, ReactNode } from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { useStyles, screenLGMin, screenXLMax } from './TimeRangeWidgetLG.styles';
import { RangeTime5Prmt } from '@/primitives/RangeTime5Prmt/RangeTime5Prmt';

interface ITimeRangeWidgetLGProps {
	fullDate: { date: string; time: string };
	children: ReactNode;
}

export const TimeRangeWidgetLG: FC<ITimeRangeWidgetLGProps> = ({ fullDate, children }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenLGMin} maxWidth={screenXLMax}>
			<Flex align="center" justify="center" gap={10} className={styles.container}>
				<div className={styles.content}>{children}</div>
				<RangeTime5Prmt fullDate={fullDate} />
			</Flex>
		</MediaQuery>
	);
};
