import React, { FC } from 'react';
import OpenAIOutlined from '@ant-design/icons/OpenAIOutlined';
import { Link } from '@tanstack/react-router';

interface ILogoPrmtProps {
	title: string;
}

export const LogoPrmt: FC<ILogoPrmtProps> = ({ title }) => (
	<Link to="/">
		<div>
			<span>
				<OpenAIOutlined />
			</span>
			<span>{title}</span>
		</div>
	</Link>
);
