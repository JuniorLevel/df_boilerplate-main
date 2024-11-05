import React, { FC } from 'react';
import { useStyles } from './Time3Prmt.styles';
import { TimeWidgetsDateWithTimeBlock } from '@/primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';

interface ITime3PrmtProps {
	fullDate: { date: string; time: string };
}

export const Time3Prmt: FC<ITime3PrmtProps> = ({ fullDate }) => {
	const { styles } = useStyles();

	return (
		<div className={styles.block}>
			<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
		</div>
	);
};
