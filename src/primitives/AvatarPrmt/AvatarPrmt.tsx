import { ReactNode } from '@tanstack/react-router';
import { Avatar } from 'antd';
import React, { FC } from 'react';

interface IAvatarPrmtProps {
	children: ReactNode;
	className: string;
}

export const AvatarPrmt: FC<IAvatarPrmtProps> = ({ children, className }) => {
	return <Avatar className={className}>{children}</Avatar>;
};
