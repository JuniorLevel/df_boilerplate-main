import React, { FC } from 'react';
import { useStyles } from './Time3Prmt.styles';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';

interface ITime3PrmtProps {
	durationStart?: string;
}

export const Time3Prmt: FC<ITime3PrmtProps> = ({ durationStart }) => {
	const { styles } = useStyles();

	return (
		<div className={styles.block}>
			<DateWithTimeBlockPrmt durationTime={durationStart} />
		</div>
	);
};
