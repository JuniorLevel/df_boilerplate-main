import React, { FC, ReactNode } from 'react';
import MoreOutlined from '@ant-design/icons/MoreOutlined';
import { Button, Flex } from 'antd';
import { useStyles } from './status.changed.styles';

interface IStatusChanged {
	children: ReactNode;
	role: string;
}

export const StatusChanged: FC<IStatusChanged> = ({ children, role }) => {
	const { styles } = useStyles();

	return (
		<Flex className={styles.changed}>
			{role && (
				<Flex align="center" className={styles.container}>
					{role}
					<div className={styles.role}>role</div>
				</Flex>
			)}
			<Flex align="center">
				<div className={styles.fio}>FIO</div>
				<div>{children}</div>
				<Button ghost size="large" className={styles.moreBtn} icon={<MoreOutlined />} />
			</Flex>
		</Flex>
	);
};
