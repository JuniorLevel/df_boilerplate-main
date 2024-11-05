import React, { FC, ReactNode } from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { useStyles, screenLGMax, screenSMMin } from './TimeRangeWidgetMD.styles';
import { RangeTime5Prmt } from '@/primitives/RangeTime5Prmt/RangeTime5Prmt';

interface ITimeRangeWidgetMDProps {
	fullDate: { date: string; time: string };
	children: ReactNode;
}

export const TimeRangeWidgetMD: FC<ITimeRangeWidgetMDProps> = ({ fullDate, children }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenSMMin} maxWidth={screenLGMax}>
			<Flex vertical align="center" gap={10} className={styles.container} justify="center">
				<div className={styles.content}>{children}</div>
				<RangeTime5Prmt fullDate={fullDate} />
			</Flex>
		</MediaQuery>
	);
};
