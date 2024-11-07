import React, { FC, useState } from 'react';
import MediaQuery from 'react-responsive';
import { ReactSortable } from 'react-sortablejs';
import { OrdersFilterOpenedMobilePrmt } from './OrdersFilterOpenedMobilePrmt/OrdersFilterOpenedMobilePrmt';
import { OrdersFilterOpenedCardsPrmt } from './OrdersFilterOpenedCardsPrmt/OrdersFilterOpenedCardsPrmt';
import { OrdersFilterCardsContainerPrmt } from '../OrdersFilterCardsContainerPrmt/OrdersFilterCardsContainerPrmt';
import { OrdersFilterOpenedCardsAddButtonPrmt } from './OrdersFilterOpenedCardsPrmt/OrdersFilterOpenedCardsAddButtonPrmt/OrdersFilterOpenedCardsAddButtonPrmt';
import { OrdersFilterClosedPrmt } from '../OrdersFilterClosedPrmt/OrdersFilterClosedPrmt';
import { filtersClosedCards } from '../data';
import { useStyles, screenSMMin } from './OrdersFilterOpened.styles';

interface IOrdersFilterOpenedPrmtProps {
	open: boolean;
	dialog: boolean;
	filters: any[];
}

export const OrdersFilterOpenedPrmt: FC<IOrdersFilterOpenedPrmtProps> = ({ open, dialog, filters }) => {
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
			<MediaQuery minWidth={screenSMMin}>
				{open ? (
					<OrdersFilterCardsContainerPrmt>
						<ReactSortable className={styles.sortable} list={cardsSortable} setList={setCardsSortable} animation={150}>
							{cardsSortable.map((card) => (
								<OrdersFilterOpenedCardsPrmt dialog={dialog} key={card.id} cardItem={card.cardItem} />
							))}
						</ReactSortable>
						<OrdersFilterOpenedCardsAddButtonPrmt onClick={createFilter} />
					</OrdersFilterCardsContainerPrmt>
				) : (
					<OrdersFilterClosedPrmt open={open} dialog={dialog} filters={filtersClosedCards} />
				)}
			</MediaQuery>
			<OrdersFilterOpenedMobilePrmt dialog={dialog} />
		</>
	);
};
