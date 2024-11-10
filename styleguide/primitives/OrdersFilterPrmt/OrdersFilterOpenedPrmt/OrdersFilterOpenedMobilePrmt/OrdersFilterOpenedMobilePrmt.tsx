import React, { FC, useState } from 'react';
import MediaQuery from 'react-responsive';
import { ReactSortable } from 'react-sortablejs';
import { Flex } from 'antd';
import { filtersOpenedCards } from '../../data';
import { OrdersFilterOpenedCardsPrmt } from '../OrdersFilterOpenedCardsPrmt/OrdersFilterOpenedCardsPrmt';
import { OrdersFilterCardsContainerPrmt } from '../../OrdersFilterCardsContainerPrmt/OrdersFilterCardsContainerPrmt';
import { OrdersFilterOpenedCardsAddButtonPrmt } from '../OrdersFilterOpenedCardsPrmt/OrdersFilterOpenedCardsAddButtonPrmt/OrdersFilterOpenedCardsAddButtonPrmt';
import { useStyles, screenSMMax } from '../OrdersFilterOpened.styles';

interface IOrdersFilterOpenedMobilePrmtProps {
	dialog: boolean;
}

export const OrdersFilterOpenedMobilePrmt: FC<IOrdersFilterOpenedMobilePrmtProps> = ({ dialog }) => {
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
		<MediaQuery maxWidth={screenSMMax}>
			<Flex gap={10} vertical>
				<OrdersFilterCardsContainerPrmt>
					<ReactSortable list={cardsSortable} setList={setCardsSortable} animation={150} className={styles.sortableMobile}>
						{cardsSortable.map((card) => (
							<OrdersFilterOpenedCardsPrmt dialog={dialog} key={card.id} cardItem={card.cardItem} />
						))}
					</ReactSortable>
				</OrdersFilterCardsContainerPrmt>
				<OrdersFilterOpenedCardsAddButtonPrmt onClick={exampleClick} />
			</Flex>
		</MediaQuery>
	);
};
