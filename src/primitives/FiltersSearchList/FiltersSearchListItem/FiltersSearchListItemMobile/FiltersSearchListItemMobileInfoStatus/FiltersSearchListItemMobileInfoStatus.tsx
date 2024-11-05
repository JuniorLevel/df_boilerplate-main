import React, { FC, useContext, useEffect } from 'react';
import { useStyles } from '../../../filters.search.list.styles';
import { StatusContext } from '@/tmp/OrdersFilter/StatusContainer/StatusContainerContext';

interface IFiltersSearchListItemMobileInfoStatus {
	item: any;
}

export const FiltersSearchListItemMobileInfoStatus: FC<IFiltersSearchListItemMobileInfoStatus> = ({ item }) => {
	const { setStatus, setCounter, setRole } = useContext(StatusContext);

	useEffect(() => {
		setStatus(item.status);
		setCounter(item.counter);
		setRole(item.role);
	}, [item.status, setStatus, item.counter, setCounter, item.role, setRole]);

	const { styles } = useStyles();

	return <div className={styles.filtersSearchListItemMobileInfoStatus}>{item.text}</div>;
};
