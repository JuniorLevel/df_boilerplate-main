import React, { FC, useState } from 'react';
import MediaQuery from 'react-responsive';
import { ReactSortable } from 'react-sortablejs';
import { Flex } from 'antd';
import { filtersOpenedCards } from '../../data';
import { OrdersFilterOpenedCards } from '../OrdersFilterOpenedCards/OrdersFilterOpenedCards';
import { OrdersFilterCardsContainer } from '../../OrdersFilterCardsContainer/OrdersFilterCardsContainer';
import { OrdersFilterOpenedCardsAddButton } from '../OrdersFilterOpenedCards/OrdersFilterOpenedCardsAddButton/OrdersFilterOpenedCardsAddButton';
import { useStyles } from '../orders.filter.opened.styles';

interface IOrdersFilterOpenedMobileProps {
	dialog: boolean;
}

export const OrdersFilterOpenedMobile: FC<IOrdersFilterOpenedMobileProps> = ({ dialog }) => {
	const [cardsSortable, setCardsSortable] = useState(filtersOpenedCards);

	const exampleClick = () => {
		const newItem = {
			id: Date.now(),
			cardItem: [],
		};
		setCardsSortable([...cardsSortable, newItem]);
	};

	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={360}>
			<Flex gap={10} vertical>
				<OrdersFilterCardsContainer>
					<ReactSortable list={cardsSortable} setList={setCardsSortable} animation={150} className={styles.sortableMobile}>
						{cardsSortable.map((card) => (
							<OrdersFilterOpenedCards dialog={dialog} key={card.id} cardItem={card.cardItem} />
						))}
					</ReactSortable>
				</OrdersFilterCardsContainer>
				<OrdersFilterOpenedCardsAddButton onClick={exampleClick} />
			</Flex>
		</MediaQuery>
	);
};
