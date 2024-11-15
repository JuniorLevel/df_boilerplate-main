import React, { FC, ReactNode } from 'react';
import MediaQuery from 'react-responsive';
import { useStyles, screenSMMax } from './TimeRangeWidgetSmCnstr.styles';
import { RangeTime5Prmt } from '@/primitives/RangeTime5Prmt/RangeTime5Prmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import { IDuration } from '@/construct/TaskCnstr/interfaces/interfaces';

interface ITimeRangeWidgetSmCnstrProps {
	duration: IDuration;
	children: ReactNode;
}

export const TimeRangeWidgetSmCnstr: FC<ITimeRangeWidgetSmCnstrProps> = ({ duration, children }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenSMMax}>
			<FlexPrmt vertical gap={10} className={styles.container}>
				{children}
				<RangeTime5Prmt duration={duration} />
			</FlexPrmt>
		</MediaQuery>
	);
};
