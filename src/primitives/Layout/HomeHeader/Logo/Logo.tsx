import React, { FC } from 'react';
import OpenAIOutlined from '@ant-design/icons/OpenAIOutlined';

interface ILogoProps {
	title: string;
}

export const Logo: FC<ILogoProps> = ({ title }) => (
	<div>
		<span>
			<OpenAIOutlined />
		</span>
		<span>{title}</span>
	</div>
);
