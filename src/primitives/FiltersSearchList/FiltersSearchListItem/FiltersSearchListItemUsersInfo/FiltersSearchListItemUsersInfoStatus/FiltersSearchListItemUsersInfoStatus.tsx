import React, { FC, useContext, useEffect } from 'react';
import { Flex, Avatar } from 'antd';
import { useStyles } from '../../../filters.search.list.styles';
import { StatusContext } from '@/tmp/OrdersFilter/StatusContainer/StatusContainerContext';

interface IFiltersSearchListItemUsersInfoStatus {
	user: any;
}

export const FiltersSearchListItemUsersInfoStatus: FC<IFiltersSearchListItemUsersInfoStatus> = ({ user }) => {
	const { setStatus } = useContext(StatusContext);

	useEffect(() => {
		setStatus(user.status);
	}, [user.status, setStatus]);

	const { styles } = useStyles();

	return (
		<Flex className={styles.filtersSearchListItemUsersInfoStatusUser} align="center" gap={10}>
			<div>{user.role}</div>
			<Flex align="center" gap={10}>
				<Avatar icon={user.username.split(' ')[0][0]} />
				<div>{user.username}</div>
			</Flex>
		</Flex>
	);
};
