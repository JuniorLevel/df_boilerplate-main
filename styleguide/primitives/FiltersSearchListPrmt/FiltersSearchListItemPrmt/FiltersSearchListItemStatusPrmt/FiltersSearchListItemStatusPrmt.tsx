import React, { FC, useContext, useEffect } from 'react';

import { useStyles } from '../../filtersSearchListPrmt.styles';
import { StatusContextPrmt } from '@/primitives/OrdersFilterPrmt/StatusContainerPrmt/StatusContainerContextPrmt';

interface IFiltersSearchListItemStatusPrmtProps {
	item: any;
}

export const FiltersSearchListItemStatusPrmt: FC<IFiltersSearchListItemStatusPrmtProps> = ({ item }) => {
	const { setStatus, setRole } = useContext(StatusContextPrmt);

	useEffect(() => {
		setStatus(item.status);
		setRole(item.role);
	}, [item.status, setStatus, item.role, setRole]);

	const { styles } = useStyles();

	return <div className={styles.filtersSearchListItemStatus}>{item.text}</div>;
};
