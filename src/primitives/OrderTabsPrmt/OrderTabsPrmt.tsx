import React, { FC } from 'react';
import { Tabs } from 'antd';
import { useStyles } from './OrderTabsPrmt.styles';

interface IOrderTabsPrmtProps {
	items: any;
}

export const OrderTabsPrmt: FC<IOrderTabsPrmtProps> = ({ items }) => {
	const { styles } = useStyles();

	return <Tabs className={styles.tabs} indicator={{ size: 0 }} animated items={items} />;
};
