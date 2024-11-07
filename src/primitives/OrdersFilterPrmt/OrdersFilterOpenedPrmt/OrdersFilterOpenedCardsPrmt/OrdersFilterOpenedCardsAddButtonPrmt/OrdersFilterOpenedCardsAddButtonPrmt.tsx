import React, { FC } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Flex, Card } from 'antd';
import MediaQuery from 'react-responsive';
import { useStyles, screenSMMax, screenSMMin } from '../../OrdersFilterOpened.styles';

interface IOrdersFilterOpenedCardsAddButtonPrmtProps {
	onClick: () => any;
}

export const OrdersFilterOpenedCardsAddButtonPrmt: FC<IOrdersFilterOpenedCardsAddButtonPrmtProps> = ({ onClick }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenSMMin}>
				<Card className={styles.cardBtnDesktop}>
					<Flex justify="center" align="center">
						<Button icon={<PlusOutlined />} onClick={onClick} />
					</Flex>
				</Card>
			</MediaQuery>
			<MediaQuery maxWidth={screenSMMax}>
				<Card className={styles.cardBtnMobile}>
					<Flex justify="center" align="center">
						<Button icon={<PlusOutlined />} onClick={onClick} />
					</Flex>
				</Card>
			</MediaQuery>
		</>
	);
};
