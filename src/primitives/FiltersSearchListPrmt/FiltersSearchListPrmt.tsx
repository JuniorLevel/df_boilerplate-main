import React, { FC, ReactNode } from 'react';
import { Flex, Pagination } from 'antd';
import MediaQuery from 'react-responsive';
import { FiltersSearchListMobilePrmt } from './FiltersSearchListMobilePrmt/FiltersSearchListMobilePrmt';
import { useStyles, screenSMMin } from './filtersSearchListPrmt.styles';

interface IFiltersSearchListPrmtProps {
	children: ReactNode;
}

export const FiltersSearchListPrmt: FC<IFiltersSearchListPrmtProps> = ({ children }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenSMMin}>
				<Flex vertical justify="space-between" gap={10} className={styles.filtersSearchList}>
					<div className={styles.filtersSearchListContent}>{children}</div>
					<Pagination defaultCurrent={1} total={50} />
				</Flex>
			</MediaQuery>
			<FiltersSearchListMobilePrmt />
		</>
	);
};
