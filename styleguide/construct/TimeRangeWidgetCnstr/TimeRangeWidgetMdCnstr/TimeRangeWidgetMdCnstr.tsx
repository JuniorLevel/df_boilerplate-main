import React, { FC, ReactNode } from 'react';
import MediaQuery from 'react-responsive';
import { useStyles, screenLGMax, screenSMMin } from './TimeRangeWidgetMdCnstr.styles';
import { RangeTime5Prmt } from '@/primitives/RangeTime5Prmt/RangeTime5Prmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import { IDuration } from '@/construct/TaskCnstr/interfaces/interfaces';

interface ITimeRangeWidgetMdCnstrProps {
	duration: IDuration;
	children: ReactNode;
}

export const TimeRangeWidgetMdCnstr: FC<ITimeRangeWidgetMdCnstrProps> = ({ duration, children }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenSMMin} maxWidth={screenLGMax}>
			<FlexPrmt vertical align="center" gap={10} className={styles.container} justify="center">
				<div className={styles.content}>{children}</div>
				<RangeTime5Prmt duration={duration} />
			</FlexPrmt>
		</MediaQuery>
	);
};
