import { Typography } from 'antd';
import React, { FC } from 'react';
import { useStyles } from './TextPrmt.styles';

interface ITextPrmtProps {
	text: string;
}

const { Paragraph } = Typography;

export const TextPrmt: FC<ITextPrmtProps> = ({ text }) => {
	const { styles } = useStyles();

	return <Paragraph className={styles.paragraph}>{text}</Paragraph>;
};
