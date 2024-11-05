import React, { FC, ReactNode, useContext } from 'react';
import { FiltersSearchList } from '../FiltersSearchList';
import { useStyles } from '../filters.search.list.styles';
import { ThemeContext } from '@/primitives/ThemeWrapper/ThemeContext';

interface IFiltersSearchListContainerProps {
	children: ReactNode;
}

export const FiltersSearchListContainer: FC<IFiltersSearchListContainerProps> = ({ children }) => {
	const { styles } = useStyles();
	const { isFooter } = useContext(ThemeContext);

	return (
		<div className={isFooter ? styles.filtersSearchListContainerWithFooter : styles.filtersSearchListContainer}>
			<FiltersSearchList>{children}</FiltersSearchList>
		</div>
	);
};
