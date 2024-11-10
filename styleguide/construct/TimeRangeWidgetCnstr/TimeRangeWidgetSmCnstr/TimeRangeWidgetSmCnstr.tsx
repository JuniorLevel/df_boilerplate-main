import React, { FC, ReactNode } from 'react';
import MediaQuery from 'react-responsive';
import { useStyles, screenSMMax } from './TimeRangeWidgetSmCnstr.styles';
import { RangeTime5Prmt } from '@/primitives/RangeTime5Prmt/RangeTime5Prmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';

interface ITimeRangeWidgetSmCnstrProps {
	fullDate: { date: string; time: string };
	children: ReactNode;
}

export const TimeRangeWidgetSmCnstr: FC<ITimeRangeWidgetSmCnstrProps> = ({ fullDate, children }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenSMMax}>
			<FlexPrmt vertical gap={10} className={styles.container}>
				{children}
				<RangeTime5Prmt fullDate={fullDate} />
			</FlexPrmt>
		</MediaQuery>
	);
};
