import React, { FC } from 'react';
import { Row, Col } from 'antd';
import { OrderListPreviewGrids } from '../../OrderListPreviewGrids/OrderListPreviewGrids';
import { useStyles } from '../../orders.list.preview.styles';
import { FiltersSearchListItemUsersInfo } from '@/primitives/FiltersSearchList/FiltersSearchListItem/FiltersSearchListItemUsersInfo/FiltersSearchListItemUsersInfo';

interface IOrderListItemProps {
	data?: any | null;
}

export const OrderListItem: FC<IOrderListItemProps> = ({ data }) => {
	const { styles } = useStyles();
	return (
		<Row gutter={[12, 12]}>
			{data && (
				<>
					<OrderListPreviewGrids data={data} />
					<Col className={styles.orderListItemUsersInfo}>
						<FiltersSearchListItemUsersInfo dataSearchUsers={data.dataSearchUsers} />
					</Col>
				</>
			)}
			{!data && <Col className={styles.orderListItemNotFound}>Not found</Col>}
		</Row>
	);
};
