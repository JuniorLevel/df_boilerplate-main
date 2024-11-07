import { Badge } from 'antd';
import React, { FC } from 'react';

interface IBadgePrmtProps {
	count: number;
}

export const BagdePrmt: FC<IBadgePrmtProps> = ({ count }) => {
	return <Badge count={count} />;
};
