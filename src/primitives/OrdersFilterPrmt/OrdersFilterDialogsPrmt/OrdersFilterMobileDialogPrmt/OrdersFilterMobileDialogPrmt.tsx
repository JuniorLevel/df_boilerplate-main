import React, { FC, useContext, useEffect, useRef } from 'react';
import { useRouter } from '@tanstack/react-router';
import { Flex } from 'antd';
import { OrdersFilterContextPrmt } from '../../OrdersFilterContextPrmt';
import { StatusContainerPrmt } from '@/primitives/OrdersFilterPrmt/StatusContainerPrmt/StatusContainerPrmt';
import { OrdersFilterOpenedCardItemPrmt } from '../../OrdersFilterOpenedPrmt/OrdersFilterOpenedCardsPrmt/OrdersFilterOpenedCardItemPrmt/OrdersFilterOpenedCardItemPrmt';
import { OrdersFilterCardAddItemButtonPrmt } from '../../OrdersFilterOpenedPrmt/OrdersFilterOpenedCardsPrmt/OrdersFilterCardAddItemButtonPrmt/OrdersFilterCardAddItemButtonPrmt';
import { useStyles } from './OrdersFilterMobileDialogPrmt.styles';

type THandleClick = (e: MouseEvent) => void;
type TAddFilterItem = () => void;
interface INewItem {
	id: number;
	status: string;
	text: string;
}

export const OrdersFilterMobileDialogPrmt: FC = () => {
	const { history } = useRouter();
	const modalRef = useRef<HTMLDivElement | null>(null);
	const { ordersFilterItems, setOrdersFilterItems } = useContext(OrdersFilterContextPrmt);

	const { styles } = useStyles();

	useEffect(() => {
		const handleClick: THandleClick = (e) => {
			if ((e.target as HTMLElement).classList.contains(styles.dialog)) history.go(-1);
		};
		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, [history, styles.dialog]);

	const addFilterItem: TAddFilterItem = () => {
		const newItem: INewItem = {
			id: Date.now(),
			status: 'updated',
			text: `project-${Date.now().toString().slice(-2)}`,
		};
		setOrdersFilterItems([...ordersFilterItems, newItem]);
	};

	return (
		<Flex vertical justify="space-between" className={styles.dialog} ref={modalRef}>
			<div>
				{ordersFilterItems.map((item) => (
					<div className={styles.cardItem} key={item.id}>
						<StatusContainerPrmt>
							<OrdersFilterOpenedCardItemPrmt key={item.id} item={item} />
						</StatusContainerPrmt>
					</div>
				))}
			</div>
			<OrdersFilterCardAddItemButtonPrmt onClick={addFilterItem} />
		</Flex>
	);
};
