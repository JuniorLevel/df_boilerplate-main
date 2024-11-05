import React, { FC } from 'react';
import { Progress } from 'antd';

export const TimeWidgetsDaysPanel: FC = () => <Progress size={{ width: 8, height: 40 }} percent={100} steps={31} showInfo={false} />;
