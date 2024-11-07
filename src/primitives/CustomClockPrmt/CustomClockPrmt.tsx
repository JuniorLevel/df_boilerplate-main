import React, { FC } from 'react';
import { Progress } from 'antd';
import { useStyles } from './CustomClockPrmt.styles';

type TType = 'circle' | 'line' | 'dashboard' | undefined;

interface ICustomClockPrmtProps {
	type: TType;
	strokeWidth: number;
	percent: number;
	size: number;
	showInfo: boolean;
}

export const CustomClockPrmt: FC<ICustomClockPrmtProps> = ({ type, strokeWidth, percent, size, showInfo }) => {
	const { styles } = useStyles();

	return <Progress className={styles.progress} type={type} strokeWidth={strokeWidth} strokeColor="white" percent={percent} size={size} showInfo={showInfo} />;
};
