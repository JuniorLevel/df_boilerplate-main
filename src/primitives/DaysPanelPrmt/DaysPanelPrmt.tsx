import React, { FC } from 'react';
import { Progress } from 'antd';

interface IDaysPanelPrmtProps {
	size: { width: number; height: number };
	percent: number;
	steps: number;
	showInfo: boolean;
}

export const DaysPanelPrmt: FC<IDaysPanelPrmtProps> = ({ size, percent, steps, showInfo }) => <Progress size={size} percent={percent} steps={steps} showInfo={showInfo} />;
