import React, { FC } from 'react';
import { Progress } from 'antd';
import { useStyles } from './TimeWidgetsCustomClock.styles';

export const TimeWidgetsCustomClock: FC = () => {
	const { styles } = useStyles();

	return <Progress className={styles.progress} type="circle" strokeWidth={10} strokeColor="white" percent={60} size={60} showInfo={false} />;
};
