import React, { FC, ReactNode } from 'react';
import MediaQuery from 'react-responsive';
import { useStyles, screenLGMax, screenSMMin } from './TimeRangeWidgetMdCnstr.styles';
import { RangeTime5Prmt } from '@/primitives/RangeTime5Prmt/RangeTime5Prmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';

interface ITimeRangeWidgetMdCnstrProps {
	fullDate: { date: string; time: string };
	children: ReactNode;
}

export const TimeRangeWidgetMdCnstr: FC<ITimeRangeWidgetMdCnstrProps> = ({ fullDate, children }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenSMMin} maxWidth={screenLGMax}>
			<FlexPrmt vertical align="center" gap={10} className={styles.container} justify="center">
				<div className={styles.content}>{children}</div>
				<RangeTime5Prmt fullDate={fullDate} />
			</FlexPrmt>
		</MediaQuery>
	);
};
