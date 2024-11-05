import React, { FC, ReactNode } from 'react';
import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { useStyles, screenSMMax } from './TimeRangeWidgetSM.styles';
import { RangeTime5Prmt } from '@/primitives/RangeTime5Prmt/RangeTime5Prmt';

interface ITimeRangeWidgetSMProps {
	fullDate: { date: string; time: string };
	children: ReactNode;
}

export const TimeRangeWidgetSM: FC<ITimeRangeWidgetSMProps> = ({ fullDate, children }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenSMMax}>
			<Flex vertical gap={10} className={styles.container}>
				{children}
				<RangeTime5Prmt fullDate={fullDate} />
			</Flex>
		</MediaQuery>
	);
};
