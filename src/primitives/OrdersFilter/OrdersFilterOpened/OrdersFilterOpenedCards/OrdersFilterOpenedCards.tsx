import React, { FC, useState } from 'react';
import { Flex, Card } from 'antd';
import { OrdersFilterOpenedCardItem } from './OrdersFilterOpenedCardItem/OrdersFilterOpenedCardItem';
import { OrdersFilterCardAddItemButton } from './OrdersFilterCardAddItemButton/OrdersFilterCardAddItemButton';
import { StatusContainer } from '@/tmp/OrdersFilter/StatusContainer/StatusContainer';
import { OrdersFilterCardAddItemDialogButton } from './OrdersFilterCardAddItemDialogButton/OrdersFilterCardAddItemDialogButton';
import { useStyles } from '../orders.filter.opened.styles';

interface IOrdersFilterOpenedCardsProps {
	cardItem: Array<any>;
	dialog: boolean;
}

export const OrdersFilterOpenedCards: FC<IOrdersFilterOpenedCardsProps> = ({ cardItem, dialog }) => {
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
							<StatusContainer>
								<OrdersFilterOpenedCardItem key={item.id} item={item} />
							</StatusContainer>
						</div>
					))}
				</div>
				{!dialog && <OrdersFilterCardAddItemButton onClick={addFilterItem} />}
				{dialog && <OrdersFilterCardAddItemDialogButton cardItem={filterItems} />}
			</Flex>
		</Card>
	);
};
