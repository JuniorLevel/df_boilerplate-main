import React, { FC } from 'react';
import { Progress } from 'antd';
import { useStyles } from './CustomClockPrmt.styles';

export const CustomClockPrmt: FC = () => {
	const { styles } = useStyles();

	return <Progress className={styles.progress} type="circle" strokeWidth={10} strokeColor="white" percent={60} size={60} showInfo={false} />;
};
