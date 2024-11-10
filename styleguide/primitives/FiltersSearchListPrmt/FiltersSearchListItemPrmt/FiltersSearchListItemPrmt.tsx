import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { FiltersSearchListItemMobilePrmt } from './FiltersSearchListItemMobilePrmt/FiltersSearchListItemMobilePrmt';
import { FiltersSearchListItemGridsPrmt } from './FiltersSearchListItemGridsPrmt/FiltersSearchListItemGridsPrmt';
import { FiltersSearchListItemUsersInfoPrmt } from './FiltersSearchListItemUsersInfoPrmt/FiltersSearchListItemUsersInfoPrmt';
import { screenSMMin } from '../filtersSearchListPrmt.styles';

interface IFiltersSearchListItemPrmtProps {
	listData: any | null;
}

export const FiltersSearchListItemPrmt: FC<IFiltersSearchListItemPrmtProps> = ({ listData }) => (
	<>
		<MediaQuery minWidth={screenSMMin}>
			<Flex vertical gap={16}>
				{listData && (
					<>
						<FiltersSearchListItemGridsPrmt text="Ant Design" />
						<FiltersSearchListItemUsersInfoPrmt dataSearchUsers={listData.dataSearchUsers} />
					</>
				)}
				{!listData && (
					<>
						<FiltersSearchListItemGridsPrmt text="" />
						<FiltersSearchListItemUsersInfoPrmt dataSearchUsers={null} />
					</>
				)}
			</Flex>
		</MediaQuery>
		{listData && <FiltersSearchListItemMobilePrmt listData={listData} />}
	</>
);
