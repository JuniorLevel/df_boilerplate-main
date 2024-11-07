import React, { FC, ReactNode } from 'react';
import MediaQuery from 'react-responsive';
import { useStyles, screenLGMin, screenXLMax } from './TimeRangeWidgetLgCnstr.styles';
import { RangeTime5Prmt } from '@/primitives/RangeTime5Prmt/RangeTime5Prmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';

interface ITimeRangeWidgetLgCnstrProps {
	fullDate: { date: string; time: string };
	children: ReactNode;
}

export const TimeRangeWidgetLgCnstr: FC<ITimeRangeWidgetLgCnstrProps> = ({ fullDate, children }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenLGMin} maxWidth={screenXLMax}>
			<FlexPrmt align="center" justify="center" gap={10} className={styles.container}>
				<div className={styles.content}>{children}</div>
				<RangeTime5Prmt fullDate={fullDate} />
			</FlexPrmt>
		</MediaQuery>
	);
};
