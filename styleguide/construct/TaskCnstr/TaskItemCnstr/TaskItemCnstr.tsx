import { ColPrmt } from '@/primitives/ColPrmt/ColPrmt';
import { RowPrmt } from '@/primitives/RowPrmt/RowPrmt';
import { WidgetContainerPrmt } from '@/primitives/WidgetContainerPrmt/WidgetContainerPrmt';
import { ReactNode } from '@tanstack/react-router';
import React, { FC } from 'react';

interface ITaskItemCnstrProps {
	children: ReactNode;
}

export const TaskItemCnstr: FC<ITaskItemCnstrProps> = ({ children }) => {
	return (
		<RowPrmt>
			<ColPrmt span={24}>
				<WidgetContainerPrmt>{children}</WidgetContainerPrmt>
			</ColPrmt>
		</RowPrmt>
	);
};
