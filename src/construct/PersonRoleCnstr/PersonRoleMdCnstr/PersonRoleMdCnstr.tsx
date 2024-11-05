import React, { FC } from 'react';
import { useStyles, screenSMMax } from './PersonRoleMdCnstr.styles';
import MediaQuery from 'react-responsive';
import { Avatar, Flex, Typography } from 'antd';

interface IPersonRoleMdCnstrProps {
	userRole: string;
	fio: string;
}

export const PersonRoleMdCnstr: FC<IPersonRoleMdCnstrProps> = ({ userRole, fio }) => {
	const { Text } = Typography;

	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenSMMax}>
			<Flex vertical align="center" gap={10} className={styles.container}>
				<Flex className={styles.content}>
					<Text>{userRole}</Text>
					<Text className={styles.role}>role</Text>
				</Flex>
				<Flex className={styles.avatar} align="center" gap={10}>
					<Avatar className={styles.avatarItem}>FIO</Avatar>
					<Text>{fio}</Text>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};
