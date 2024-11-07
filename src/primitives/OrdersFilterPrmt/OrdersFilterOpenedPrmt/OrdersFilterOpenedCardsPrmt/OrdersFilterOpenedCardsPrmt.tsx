import React, { FC, useState } from 'react';
import { Flex, Card } from 'antd';
import { OrdersFilterOpenedCardItemPrmt } from './OrdersFilterOpenedCardItemPrmt/OrdersFilterOpenedCardItemPrmt';
import { OrdersFilterCardAddItemButtonPrmt } from './OrdersFilterCardAddItemButtonPrmt/OrdersFilterCardAddItemButtonPrmt';
import { StatusContainerPrmt } from '@/primitives/OrdersFilterPrmt/StatusContainerPrmt/StatusContainerPrmt';
import { OrdersFilterCardAddItemDialogButtonPrmt } from './OrdersFilterCardAddItemDialogButtonPrmt/OrdersFilterCardAddItemDialogButtonPrmt';
import { useStyles } from '../OrdersFilterOpened.styles';

interface IOrdersFilterOpenedCardsPrmtProps {
	cardItem: Array<any>;
	dialog: boolean;
}

export const OrdersFilterOpenedCardsPrmt: FC<IOrdersFilterOpenedCardsPrmtProps> = ({ cardItem, dialog }) => {
	const [filterItems, setFilterItems] = useState(cardItem);

	const addFilterItem = () => {
		const newItem = {
			id: Date.now(),
			status: 'updated',
			text: `project-${Date.now().toString().slice(-2)}`,
		};
		setFilterItems([...filterItems, newItem]);
	};

	const { styles } = useStyles();

	return (
		<Card className={styles.card}>
			<Flex vertical justify="space-between" className={styles.cardContainer}>
				<div>
					{filterItems.map((item) => (
						<div className={styles.cardItem} key={item.id}>
							<StatusContainerPrmt>
								<OrdersFilterOpenedCardItemPrmt key={item.id} item={item} />
							</StatusContainerPrmt>
						</div>
					))}
				</div>
				{!dialog && <OrdersFilterCardAddItemButtonPrmt onClick={addFilterItem} />}
				{dialog && <OrdersFilterCardAddItemDialogButtonPrmt cardItem={filterItems} />}
			</Flex>
		</Card>
	);
};
