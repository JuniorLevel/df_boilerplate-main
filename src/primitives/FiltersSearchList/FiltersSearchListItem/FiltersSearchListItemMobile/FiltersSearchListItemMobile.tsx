import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { Flex, Row, Col } from 'antd';
import { FiltersSearchListItemUsersInfo } from '../FiltersSearchListItemUsersInfo/FiltersSearchListItemUsersInfo';
import { FiltersSearchListItemMobileInfoStatus } from './FiltersSearchListItemMobileInfoStatus/FiltersSearchListItemMobileInfoStatus';
import { useStyles } from '../../filters.search.list.styles';
import { StatusContainer } from '@/tmp/OrdersFilter/StatusContainer/StatusContainer';

interface IFiltersSearchListItemMobile {
	listData: any | null;
}

export const FiltersSearchListItemMobile: FC<IFiltersSearchListItemMobile> = ({ listData }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={360}>
			<Flex vertical justify="space-between" gap={10} className={styles.filtersSearchListItemMobile}>
				<Row gutter={[12, 12]}>
					{listData?.dataSearch.map((item: any) => (
						<Col span={24} key={item.id}>
							<StatusContainer>
								<FiltersSearchListItemMobileInfoStatus key={item.id} item={item} />
							</StatusContainer>
						</Col>
					))}
					{listData && (
						<Col span={24}>
							<div className={styles.notFoundMobile}>Not found</div>
						</Col>
					)}
				</Row>
				{listData && <FiltersSearchListItemUsersInfo dataSearchUsers={listData.dataSearchUsers} />}
				{!listData && <FiltersSearchListItemUsersInfo dataSearchUsers={null} />}
			</Flex>
		</MediaQuery>
	);
};
