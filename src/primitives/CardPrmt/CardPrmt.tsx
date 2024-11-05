import MoreOutlined from '@ant-design/icons/MoreOutlined';
import React, { FC, ReactNode } from 'react';
import { Button } from 'antd';
import { useStyles } from './CardPrmt.styles';

interface ICardPrmtProps {
	title: string | ReactNode;
	actionOnBody?: boolean;
	children?: ReactNode;
}

export const CardPrmt: FC<ICardPrmtProps> = ({ title, actionOnBody, children }) => {
	const { styles } = useStyles();

	return (
		<div className={styles.container}>
			<div className={styles.cardElement}>
				<div className={actionOnBody ? styles.cardElementActionOnBody : styles.cardElement}>
					<Button size="large" className={styles.moreBtn} icon={<MoreOutlined />} />
				</div>
				<div className={styles.title}>{title}</div>
			</div>
			{children}
		</div>
	);
};
