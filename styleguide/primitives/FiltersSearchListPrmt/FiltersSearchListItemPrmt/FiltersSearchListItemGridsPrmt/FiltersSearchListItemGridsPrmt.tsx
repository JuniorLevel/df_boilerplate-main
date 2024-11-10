import { Row, Col } from 'antd';
import React, { FC } from 'react';
import { useStyles } from '../../filtersSearchListPrmt.styles';
import { StatusContainerPrmt } from '@/primitives/OrdersFilterPrmt/StatusContainerPrmt/StatusContainerPrmt';

interface IFiltersSearchListItemGridsPrmtProps {
	text: string;
}

export const FiltersSearchListItemGridsPrmt: FC<IFiltersSearchListItemGridsPrmtProps> = ({ text }) => {
	const { styles } = useStyles();

	return (
		<>
			<Row gutter={[36, 12]}>
				<Col className={styles.filtersSearchListItemGrids} xs={24} lg={12}>
					<StatusContainerPrmt>{text}</StatusContainerPrmt>
				</Col>
				<Col className={styles.filtersSearchListItemGrids} xs={24} lg={12}>
					<StatusContainerPrmt>{text}</StatusContainerPrmt>
				</Col>
			</Row>
			<Row gutter={[36, 12]}>
				<Col className={styles.filtersSearchListItemGrids} xs={24} lg={{ flex: 1 }}>
					<StatusContainerPrmt>{text}</StatusContainerPrmt>
				</Col>
				<Col className={styles.filtersSearchListItemGrids} xs={24} lg={8}>
					<StatusContainerPrmt>{text}</StatusContainerPrmt>
				</Col>
			</Row>
			<Row gutter={[36, 12]}>
				<Col className={styles.filtersSearchListItemGrids} xs={24} lg={12}>
					<StatusContainerPrmt>{text}</StatusContainerPrmt>
				</Col>
				<Col className={styles.filtersSearchListItemGrids} xs={24} lg={12}>
					<StatusContainerPrmt>{text}</StatusContainerPrmt>
				</Col>
			</Row>
			<Row gutter={[36, 12]}>
				<Col className={styles.filtersSearchListItemGrids} xs={24} lg={{ flex: 1 }}>
					<StatusContainerPrmt>{text}</StatusContainerPrmt>
				</Col>
				<Col className={styles.filtersSearchListItemGrids} xs={24} lg={8}>
					<StatusContainerPrmt>{text}</StatusContainerPrmt>
				</Col>
			</Row>
		</>
	);
};
