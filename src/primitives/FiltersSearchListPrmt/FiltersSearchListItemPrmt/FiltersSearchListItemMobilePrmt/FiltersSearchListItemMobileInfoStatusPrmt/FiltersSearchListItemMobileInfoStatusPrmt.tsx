import React, { FC, useContext, useEffect } from 'react';
import { useStyles } from '../../../filtersSearchListPrmt.styles';
import { StatusContextPrmt } from '@/primitives/OrdersFilterPrmt/StatusContainerPrmt/StatusContainerContextPrmt';

interface IFiltersSearchListItemMobileInfoStatusPrmtProps {
	item: any;
}

export const FiltersSearchListItemMobileInfoStatusPrmt: FC<IFiltersSearchListItemMobileInfoStatusPrmtProps> = ({ item }) => {
	const { setStatus, setCounter, setRole } = useContext(StatusContextPrmt);

	useEffect(() => {
		setStatus(item.status);
		setCounter(item.counter);
		setRole(item.role);
	}, [item.status, setStatus, item.counter, setCounter, item.role, setRole]);

	const { styles } = useStyles();

	return <div className={styles.filtersSearchListItemMobileInfoStatus}>{item.text}</div>;
};
