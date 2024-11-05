import React, { FC } from 'react';
import { Button } from 'antd';

interface IWelcomeButtonProps {
	title: string;
	onClick: () => void;
}

export const WelcomeButton: FC<IWelcomeButtonProps> = ({ title, onClick }: IWelcomeButtonProps) => (
	<Button type="primary" shape="circle" onClick={onClick}>
		{title}
	</Button>
);
