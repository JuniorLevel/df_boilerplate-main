import React, { FC, useContext, useEffect } from 'react';
import MediaQuery from 'react-responsive';
import { Button, Flex } from 'antd';
import { ArrowsAltOutlined, CloseSquareOutlined } from '@ant-design/icons';
import { OrdersFilterClosedCardsPrmt } from './OrdersFilterClosedCardsPrmt/OrdersFilterClosedCardsPrmt';
import { OrdersFilterOpenedCardsPrmt } from '../OrdersFilterOpenedPrmt/OrdersFilterOpenedCardsPrmt/OrdersFilterOpenedCardsPrmt';
import { OrdersFilterContextPrmt } from '../OrdersFilterContextPrmt';
import { useStyles, screenSMMin } from './OrdersFilterClosedPrmt.styles';
import { OrdersFilterCardsContainerPrmt } from '../OrdersFilterCardsContainerPrmt/OrdersFilterCardsContainerPrmt';

interface IOrdersFilterClosedPrmtProps {
	open: boolean;
	filters: any;
	dialog: boolean;
}

export const OrdersFilterClosedPrmt: FC<IOrdersFilterClosedPrmtProps> = ({ open, filters, dialog }) => {
	const { isOpenedCards, setIsOpenedCards } = useContext(OrdersFilterContextPrmt);

	useEffect(() => {
		setIsOpenedCards(open);
	}, [open, setIsOpenedCards]);

	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenSMMin}>
			<OrdersFilterCardsContainerPrmt>
				<Flex gap="small" className={styles.cards}>
					{!isOpenedCards && filters.map((card: any) => <OrdersFilterClosedCardsPrmt key={card.id} cardClosed={card} />)}
					{isOpenedCards && filters.map((card: any) => <OrdersFilterOpenedCardsPrmt dialog={dialog} key={card.id} cardItem={card.item} />)}
					{isOpenedCards && <Button icon={<CloseSquareOutlined />} size="small" onClick={() => setIsOpenedCards(!isOpenedCards)} className={styles.closeBtn} />}
					{!isOpenedCards && <Button icon={<ArrowsAltOutlined />} size="small" onClick={() => setIsOpenedCards(!isOpenedCards)} className={styles.arrowsBtn} />}
				</Flex>
			</OrdersFilterCardsContainerPrmt>
		</MediaQuery>
	);
};
