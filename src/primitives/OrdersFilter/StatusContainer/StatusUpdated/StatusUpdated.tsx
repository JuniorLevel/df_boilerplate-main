import React, { FC, ReactNode } from 'react';
import MoreOutlined from '@ant-design/icons/MoreOutlined';
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';
import CloseCircleOutlined from '@ant-design/icons/CloseCircleOutlined';
import { Button, Flex, Badge } from 'antd';
import { useStyles } from './status.updated.styles';

interface IStatusUpdatedProps {
	children: ReactNode;
	counter: number;
}

export const StatusUpdated: FC<IStatusUpdatedProps> = ({ children, counter }) => {
	const { styles } = useStyles();

	return (
		<Flex justify="space-between" align="center" className={styles.updated}>
			<Flex align="center">
				<div className={styles.fio}>FIO</div>
				<div>{children}</div>
			</Flex>
			<Flex gap={15}>
				<Button className={styles.closeBtn} ghost size="large" icon={<CloseCircleOutlined />} />
				<Button className={styles.checkBtn} ghost size="large" icon={<CheckCircleOutlined />} />
				{counter > 0 && <Badge count={counter} className={styles.badge} />}
				<Button ghost size="large" className={styles.moreBtn} icon={<MoreOutlined />} />
			</Flex>
		</Flex>
	);
};
