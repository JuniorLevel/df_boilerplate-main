import React, { FC, useContext, useEffect } from 'react';
import MediaQuery from 'react-responsive';
import { Button, Flex } from 'antd';
import { ArrowsAltOutlined, CloseSquareOutlined } from '@ant-design/icons';
import { OrdersFilterCardsContainer } from '../OrdersFilterCardsContainer/OrdersFilterCardsContainer';
import { OrdersFilterClosedCards } from './OrdersFilterClosedCards/OrdersFilterClosedCards';
import { OrdersFilterOpenedCards } from '../OrdersFilterOpened/OrdersFilterOpenedCards/OrdersFilterOpenedCards';
import { OrdersFilterContext } from '../OrdersFilterContext';
import { useStyles } from './orders.filter.closed.styles';

interface IOrdersFilterClosedProps {
	open: boolean;
	filters: any;
	dialog: boolean;
}

export const OrdersFilterClosed: FC<IOrdersFilterClosedProps> = ({ open, filters, dialog }) => {
	const { isOpenedCards, setIsOpenedCards } = useContext(OrdersFilterContext);

	useEffect(() => {
		setIsOpenedCards(open);
	}, [open, setIsOpenedCards]);

	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={361}>
			<OrdersFilterCardsContainer>
				<Flex gap="small" className={styles.cards}>
					{!isOpenedCards && filters.map((card: any) => <OrdersFilterClosedCards key={card.id} cardClosed={card} />)}
					{isOpenedCards && filters.map((card: any) => <OrdersFilterOpenedCards dialog={dialog} key={card.id} cardItem={card.item} />)}
					{isOpenedCards && <Button icon={<CloseSquareOutlined />} size="small" onClick={() => setIsOpenedCards(!isOpenedCards)} className={styles.closeBtn} />}
					{!isOpenedCards && <Button icon={<ArrowsAltOutlined />} size="small" onClick={() => setIsOpenedCards(!isOpenedCards)} className={styles.arrowsBtn} />}
				</Flex>
			</OrdersFilterCardsContainer>
		</MediaQuery>
	);
};
