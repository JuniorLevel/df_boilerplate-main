import React, { FC } from 'react';
import { Row, Col } from 'antd';
import { OrderListPreviewGridsPrmt } from '../../OrderListPreviewGridsPrmt/OrderListPreviewGridsPrmt';
import { useStyles } from '../../OrdersListPreviewPrmt.styles';
import { FiltersSearchListItemUsersInfoPrmt } from '@/primitives/FiltersSearchListPrmt/FiltersSearchListItemPrmt/FiltersSearchListItemUsersInfoPrmt/FiltersSearchListItemUsersInfoPrmt';

interface IOrderListItemPrmtProps {
	data?: any | null;
}

export const OrderListItemPrmt: FC<IOrderListItemPrmtProps> = ({ data }) => {
	const { styles } = useStyles();
	return (
		<Row gutter={[12, 12]}>
			{data && (
				<>
					<OrderListPreviewGridsPrmt data={data} />
					<Col className={styles.orderListItemUsersInfo}>
						<FiltersSearchListItemUsersInfoPrmt dataSearchUsers={data.dataSearchUsers} />
					</Col>
				</>
			)}
			{!data && <Col className={styles.orderListItemNotFound}>Not found</Col>}
		</Row>
	);
};
