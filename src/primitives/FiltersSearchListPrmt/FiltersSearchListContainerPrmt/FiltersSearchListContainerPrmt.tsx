import React, { FC, ReactNode, useContext } from 'react';
import { FiltersSearchListPrmt } from '../FiltersSearchListPrmt';
import { useStyles } from '../filtersSearchListPrmt.styles';
import { ThemeContextPrmt } from '@/primitives/ThemeWrapperPrmt/ThemeContextPrmt';

interface IFiltersSearchListContainerPrmtProps {
	children: ReactNode;
}

export const FiltersSearchListContainerPrmt: FC<IFiltersSearchListContainerPrmtProps> = ({ children }) => {
	const { styles } = useStyles();
	const { isFooter } = useContext(ThemeContextPrmt);

	return (
		<div className={isFooter ? styles.filtersSearchListContainerWithFooter : styles.filtersSearchListContainer}>
			<FiltersSearchListPrmt>{children}</FiltersSearchListPrmt>
		</div>
	);
};
