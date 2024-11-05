import React, { FC, useState } from 'react';
import MediaQuery from 'react-responsive';
import { ReactSortable } from 'react-sortablejs';
import { OrdersFilterOpenedMobile } from './OrdersFilterOpenedMobile/OrdersFilterOpenedMobile';
import { OrdersFilterOpenedCards } from './OrdersFilterOpenedCards/OrdersFilterOpenedCards';
import { OrdersFilterCardsContainer } from '../OrdersFilterCardsContainer/OrdersFilterCardsContainer';
import { OrdersFilterOpenedCardsAddButton } from './OrdersFilterOpenedCards/OrdersFilterOpenedCardsAddButton/OrdersFilterOpenedCardsAddButton';
import { OrdersFilterClosed } from '../OrdersFilterClosed/OrdersFilterClosed';
import { filtersClosedCards } from '../data';
import { useStyles } from './orders.filter.opened.styles';

interface IOrdersFilterOpenedProps {
	open: boolean;
	dialog: boolean;
	filters: any[];
}

export const OrdersFilterOpened: FC<IOrdersFilterOpenedProps> = ({ open, dialog, filters }) => {
	const [cardsSortable, setCardsSortable] = useState(filters);

	const createFilter = () => {
		const newItem = {
			id: Date.now(),
			cardItem: [],
		};
		setCardsSortable([...cardsSortable, newItem]);
	};

	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={361}>
				{open ? (
					<OrdersFilterCardsContainer>
						<ReactSortable className={styles.sortable} list={cardsSortable} setList={setCardsSortable} animation={150}>
							{cardsSortable.map((card) => (
								<OrdersFilterOpenedCards dialog={dialog} key={card.id} cardItem={card.cardItem} />
							))}
						</ReactSortable>
						<OrdersFilterOpenedCardsAddButton onClick={createFilter} />
					</OrdersFilterCardsContainer>
				) : (
					<OrdersFilterClosed open={open} dialog={dialog} filters={filtersClosedCards} />
				)}
			</MediaQuery>
			<OrdersFilterOpenedMobile dialog={dialog} />
		</>
	);
};
