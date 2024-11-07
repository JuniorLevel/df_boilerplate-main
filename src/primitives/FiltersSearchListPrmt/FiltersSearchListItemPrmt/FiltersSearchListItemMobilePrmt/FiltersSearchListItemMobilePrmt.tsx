import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { Flex, Row, Col } from 'antd';
import { FiltersSearchListItemUsersInfoPrmt } from '../FiltersSearchListItemUsersInfoPrmt/FiltersSearchListItemUsersInfoPrmt';
import { FiltersSearchListItemMobileInfoStatusPrmt } from './FiltersSearchListItemMobileInfoStatusPrmt/FiltersSearchListItemMobileInfoStatusPrmt';
import { useStyles, screenSMMax } from '../../filtersSearchListPrmt.styles';
import { StatusContainerPrmt } from '@/primitives/OrdersFilterPrmt/StatusContainerPrmt/StatusContainerPrmt';

interface IFiltersSearchListItemMobilePrmtProps {
	listData: any | null;
}

export const FiltersSearchListItemMobilePrmt: FC<IFiltersSearchListItemMobilePrmtProps> = ({ listData }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenSMMax}>
			<Flex vertical justify="space-between" gap={10} className={styles.filtersSearchListItemMobile}>
				<Row gutter={[12, 12]}>
					{listData?.dataSearch.map((item: any) => (
						<Col span={24} key={item.id}>
							<StatusContainerPrmt>
								<FiltersSearchListItemMobileInfoStatusPrmt key={item.id} item={item} />
							</StatusContainerPrmt>
						</Col>
					))}
					{listData && (
						<Col span={24}>
							<div className={styles.notFoundMobile}>Not found</div>
						</Col>
					)}
				</Row>
				{listData && <FiltersSearchListItemUsersInfoPrmt dataSearchUsers={listData.dataSearchUsers} />}
				{!listData && <FiltersSearchListItemUsersInfoPrmt dataSearchUsers={null} />}
			</Flex>
		</MediaQuery>
	);
};
