import React, { FC, ReactNode, useContext, useState } from 'react';
import MoreOutlined from '@ant-design/icons/MoreOutlined';
import { Button } from 'antd';
import { useStyles } from './CardPrmt.styles';
import { SelectPrmt } from '../SelectPrmt/SelectPrmt';
import { TaskContextCnstr } from '@/construct/TaskCnstr/TaskContextCnstr';

interface ICardPrmtProps {
	title: string | ReactNode;
	actionOnBody?: boolean;
	children?: ReactNode;
}

export const CardPrmt: FC<ICardPrmtProps> = ({ title, actionOnBody, children }) => {
	const { styles } = useStyles();

	const { setCurrentSelectValue } = useContext(TaskContextCnstr);
	const [isSelectVisible, setIsSelectVisible] = useState(false);

	return (
		<div className={styles.container}>
			<div className={styles.cardElement}>
				<div className={actionOnBody ? styles.cardElementActionOnBody : ''}>
					<Button size="large" className={styles.moreBtn} onClick={() => setIsSelectVisible(!isSelectVisible)} icon={<MoreOutlined />} />
					{isSelectVisible && (
						<SelectPrmt
							onChange={(value) => {
								setCurrentSelectValue(value);
								setIsSelectVisible(false);
							}}
							options={[
								{ value: 'task', label: 'Добавить задачу' },
								{ value: 'taskWithDuration', label: 'Добавить задачу с диапазоном' },
								{ value: 'uploadFile', label: 'Добавить файл' },
								{ value: 'addExecutor', label: 'Добавить исполнителя' },
							]}
						/>
					)}
				</div>
				<div className={styles.title}>{title}</div>
			</div>
			{children}
		</div>
	);
};
