import React, { FC, ReactNode } from 'react';
import MediaQuery from 'react-responsive';
import { useStyles, screenLGMin, screenXLMax } from './TimeRangeWidgetLgCnstr.styles';
import { RangeTime5Prmt } from '@/primitives/RangeTime5Prmt/RangeTime5Prmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import { IDuration } from '@/construct/TaskCnstr/interfaces/interfaces';

interface ITimeRangeWidgetLgCnstrProps {
	duration: IDuration;
	children: ReactNode;
}

export const TimeRangeWidgetLgCnstr: FC<ITimeRangeWidgetLgCnstrProps> = ({ duration, children }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenLGMin} maxWidth={screenXLMax}>
			<FlexPrmt align="center" justify="center" gap={10} className={styles.container}>
				<div className={styles.content}>{children}</div>
				<RangeTime5Prmt duration={duration} />
			</FlexPrmt>
		</MediaQuery>
	);
};
