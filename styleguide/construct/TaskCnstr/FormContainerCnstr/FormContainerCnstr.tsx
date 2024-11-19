import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import React, { ReactNode } from 'react';

interface IFormContainerCnstr {
	children: ReactNode;
}

export const FormContainerCnstr = ({ children }: IFormContainerCnstr) => {
	return (
		<FlexPrmt wrap gap={10}>
			{children}
		</FlexPrmt>
	);
};
