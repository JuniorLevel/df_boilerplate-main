import React, { FC } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Flex, Card } from 'antd';
import MediaQuery from 'react-responsive';
import { useStyles } from '../../orders.filter.opened.styles';

interface IOrdersFilterOpenedCardsAddButtonProps {
	onClick: () => any;
}

export const OrdersFilterOpenedCardsAddButton: FC<IOrdersFilterOpenedCardsAddButtonProps> = ({ onClick }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={361}>
				<Card className={styles.cardBtnDesktop}>
					<Flex justify="center" align="center">
						<Button icon={<PlusOutlined />} onClick={onClick} />
					</Flex>
				</Card>
			</MediaQuery>
			<MediaQuery maxWidth={360}>
				<Card className={styles.cardBtnMobile}>
					<Flex justify="center" align="center">
						<Button icon={<PlusOutlined />} onClick={onClick} />
					</Flex>
				</Card>
			</MediaQuery>
		</>
	);
};
