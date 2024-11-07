import React, { FC } from 'react';
import { Button } from 'antd';

interface IWelcomeButtonPrmtProps {
	title: string;
	onClick: () => void;
}

export const WelcomeButtonPrmt: FC<IWelcomeButtonPrmtProps> = ({ title, onClick }) => (
	<Button type="primary" shape="circle" onClick={onClick}>
		{title}
	</Button>
);
