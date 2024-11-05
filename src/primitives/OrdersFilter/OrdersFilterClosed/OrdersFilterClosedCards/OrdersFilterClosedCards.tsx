import React, { FC } from 'react';
import { Flex, Badge, Popover, Card } from 'antd';
import { OrdersFilterOpenedCardItem } from '../../OrdersFilterOpened/OrdersFilterOpenedCards/OrdersFilterOpenedCardItem/OrdersFilterOpenedCardItem';
import { useStyles } from '../orders.filter.closed.styles';
import { StatusContainer } from '@/tmp/OrdersFilter/StatusContainer/StatusContainer';

interface IOrdersFilterClosedCardsProps {
	cardClosed: any;
}

export const OrdersFilterClosedCards: FC<IOrdersFilterClosedCardsProps> = ({ cardClosed }) => {
	const { styles } = useStyles();

	return (
		<Popover
			placement="top"
			content={
				<Card className={styles.popover}>
					{cardClosed.item.map((item: any) => (
						<div className={styles.popoverItem} key={item.id}>
							<StatusContainer>
								<OrdersFilterOpenedCardItem key={item.id} item={item} />
							</StatusContainer>
						</div>
					))}
				</Card>
			}
		>
			<Card className={styles.card}>
				<Flex gap={10} align="center">
					<div>{cardClosed.title}</div>
					<Badge count={cardClosed.item.length} />
				</Flex>
			</Card>
		</Popover>
	);
};
