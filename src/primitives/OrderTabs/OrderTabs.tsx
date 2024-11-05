import React, { FC } from 'react';
import { Tabs } from 'antd';
import { useStyles } from './order.tabs.styles';

interface IOrderTabsProps {
	items: any;
}

export const OrderTabs: FC<IOrderTabsProps> = ({ items }) => {
	const { styles } = useStyles();

	return <Tabs className={styles.tabs} defaultActiveKey={items.length} items={items} />;
};
