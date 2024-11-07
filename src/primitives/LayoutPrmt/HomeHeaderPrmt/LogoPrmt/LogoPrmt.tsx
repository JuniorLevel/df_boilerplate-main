import React, { FC } from 'react';
import OpenAIOutlined from '@ant-design/icons/OpenAIOutlined';

interface ILogoPrmtProps {
	title: string;
}

export const LogoPrmt: FC<ILogoPrmtProps> = ({ title }) => (
	<div>
		<span>
			<OpenAIOutlined />
		</span>
		<span>{title}</span>
	</div>
);
