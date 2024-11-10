import React, { FC, useContext, useEffect } from 'react';
import { Flex, Avatar } from 'antd';
import { useStyles } from '../../../filtersSearchListPrmt.styles';
import { StatusContextPrmt } from '@/primitives/OrdersFilterPrmt/StatusContainerPrmt/StatusContainerContextPrmt';

interface IFiltersSearchListItemUsersInfoStatusPrmtProps {
	user: any;
}

export const FiltersSearchListItemUsersInfoStatusPrmt: FC<IFiltersSearchListItemUsersInfoStatusPrmtProps> = ({ user }) => {
	const { setStatus } = useContext(StatusContextPrmt);

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
