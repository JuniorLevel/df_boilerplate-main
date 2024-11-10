import { Badge } from 'antd';
import React, { FC } from 'react';

interface IBadgePrmtProps {
	count: number;
}

export const BadgePrmt: FC<IBadgePrmtProps> = ({ count }) => {
	return <Badge count={count} />;
};
