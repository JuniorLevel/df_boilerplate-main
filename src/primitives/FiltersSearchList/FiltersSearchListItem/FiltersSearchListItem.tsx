import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
import { FiltersSearchListItemMobile } from './FiltersSearchListItemMobile/FiltersSearchListItemMobile';
import { FiltersSearchListItemGrids } from './FiltersSearchListItemGrids/FiltersSearchListItemGrids';
import { FiltersSearchListItemUsersInfo } from './FiltersSearchListItemUsersInfo/FiltersSearchListItemUsersInfo';

interface IFiltersSearchListProps {
	listData: any | null;
}

export const FiltersSearchListItem: FC<IFiltersSearchListProps> = ({ listData }) => (
	<>
		<MediaQuery minWidth={361}>
			<Flex vertical gap={16}>
				{listData && (
					<>
						<FiltersSearchListItemGrids text="Ant Design" />
						<FiltersSearchListItemUsersInfo dataSearchUsers={listData.dataSearchUsers} />
					</>
				)}
				{!listData && (
					<>
						<FiltersSearchListItemGrids text="" />
						<FiltersSearchListItemUsersInfo dataSearchUsers={null} />
					</>
				)}
			</Flex>
		</MediaQuery>
		{listData && <FiltersSearchListItemMobile listData={listData} />}
	</>
);
