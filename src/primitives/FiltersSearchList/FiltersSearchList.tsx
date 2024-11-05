import React, { FC, ReactNode } from 'react';
import { Flex, Pagination } from 'antd';
import MediaQuery from 'react-responsive';
import { FiltersSearchListMobile } from './FiltersSearchListMobile/FiltersSearchListMobile';
import { useStyles } from './filters.search.list.styles';

interface IFiltersSearchListProps {
	children: ReactNode;
}

export const FiltersSearchList: FC<IFiltersSearchListProps> = ({ children }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={361}>
				<Flex vertical justify="space-between" gap={10} className={styles.filtersSearchList}>
					<div className={styles.filtersSearchListContent}>{children}</div>
					<Pagination defaultCurrent={1} total={50} />
				</Flex>
			</MediaQuery>
			<FiltersSearchListMobile />
		</>
	);
};
