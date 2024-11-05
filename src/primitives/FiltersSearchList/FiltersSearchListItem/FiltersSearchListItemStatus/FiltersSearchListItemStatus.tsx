import React, { FC, useContext, useEffect } from 'react';
import { StatusContext } from '@/tmp/OrdersFilter/StatusContainer/StatusContainerContext';
import { useStyles } from '../../filters.search.list.styles';

interface IFiltersSearchListItemStatus {
	item: any;
}

export const FiltersSearchListItemStatus: FC<IFiltersSearchListItemStatus> = ({ item }) => {
	const { setStatus, setRole } = useContext(StatusContext);

	useEffect(() => {
		setStatus(item.status);
		setRole(item.role);
	}, [item.status, setStatus, item.role, setRole]);

	const { styles } = useStyles();

	return <div className={styles.filtersSearchListItemStatus}>{item.text}</div>;
};
