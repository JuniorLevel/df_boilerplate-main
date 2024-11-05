import React, { FC, useContext, useEffect, useRef } from 'react';
import { useRouter } from '@tanstack/react-router';
import { Flex } from 'antd';
import { OrdersFilterContext } from '../../OrdersFilterContext';
import { StatusContainer } from '@/tmp/OrdersFilter/StatusContainer/StatusContainer';
import { OrdersFilterOpenedCardItem } from '../../OrdersFilterOpened/OrdersFilterOpenedCards/OrdersFilterOpenedCardItem/OrdersFilterOpenedCardItem';
import { OrdersFilterCardAddItemButton } from '../../OrdersFilterOpened/OrdersFilterOpenedCards/OrdersFilterCardAddItemButton/OrdersFilterCardAddItemButton';
import { useStyles } from './ordersFilterMobileDialog.styles';

export const OrdersFilterMobileDialog: FC = () => {
	const { history } = useRouter();
	const modalRef = useRef<HTMLDivElement | null>(null);
	const { ordersFilterItems, setOrdersFilterItems } = useContext(OrdersFilterContext);

	const { styles } = useStyles();

	useEffect(() => {
		const handleClick = (e: any) => {
			if (e.target.classList.contains(styles.dialog)) history.go(-1);
		};
		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, [history, styles.dialog]);

	const addFilterItem = () => {
		const newItem = {
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
						<StatusContainer>
							<OrdersFilterOpenedCardItem key={item.id} item={item} />
						</StatusContainer>
					</div>
				))}
			</div>
			<OrdersFilterCardAddItemButton onClick={addFilterItem} />
		</Flex>
	);
};
