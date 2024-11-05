import React, { FC } from 'react';
import { Flex, Avatar, Typography } from 'antd';
import MediaQuery from 'react-responsive';
import { useStyles, screenSMMin } from './PersonRoleCnstr.styles';
import { PersonRoleMdCnstr } from './PersonRoleMdCnstr/PersonRoleMdCnstr';

interface IPersonRoleCnstrProps {
	userRole: string;
	fio: string;
}

export const PersonRoleCnstr: FC<IPersonRoleCnstrProps> = ({ userRole, fio }) => {
	const { Text } = Typography;

	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenSMMin}>
				<Flex wrap align="center" gap={10} className={styles.container}>
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
			<PersonRoleMdCnstr userRole={userRole} fio={fio} />
		</>
	);
};
