import React, { FC } from 'react';
import { useStyles } from './Time3Prmt.styles';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';

interface ITime3PrmtProps {
	fullDate: { date: string; time: string };
}

export const Time3Prmt: FC<ITime3PrmtProps> = ({ fullDate }) => {
	const { styles } = useStyles();

	return (
		<div className={styles.block}>
			<DateWithTimeBlockPrmt fullDate={fullDate} />
		</div>
	);
};
