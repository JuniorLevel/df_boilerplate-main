import React, { FC } from 'react';
import { Flex, Badge, Popover, Card } from 'antd';
import { OrdersFilterOpenedCardItemPrmt } from '../../OrdersFilterOpenedPrmt/OrdersFilterOpenedCardsPrmt/OrdersFilterOpenedCardItemPrmt/OrdersFilterOpenedCardItemPrmt';
import { useStyles } from '../OrdersFilterClosedPrmt.styles';
import { StatusContainerPrmt } from '@/primitives/OrdersFilterPrmt/StatusContainerPrmt/StatusContainerPrmt';

interface IOrdersFilterClosedCardsPrmtProps {
	cardClosed: any;
}

export const OrdersFilterClosedCardsPrmt: FC<IOrdersFilterClosedCardsPrmtProps> = ({ cardClosed }) => {
	const { styles } = useStyles();

	return (
		<Popover
			placement="top"
			content={
				<Card className={styles.popover}>
					{cardClosed.item.map((item: any) => (
						<div className={styles.popoverItem} key={item.id}>
							<StatusContainerPrmt>
								<OrdersFilterOpenedCardItemPrmt key={item.id} item={item} />
							</StatusContainerPrmt>
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
