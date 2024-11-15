import { CardPrmt } from '@/primitives/CardPrmt/CardPrmt';
import { LayoutPrmt } from '@/primitives/LayoutPrmt/LayoutPrmt';
import React, { FC, ReactNode } from 'react';
import { TextTime1Cnstr } from '../TextTime1Cnstr/TextTime1Cnstr';
import { WidgetContainerPrmt } from '@/primitives/WidgetContainerPrmt/WidgetContainerPrmt';
import { ColPrmt } from '@/primitives/ColPrmt/ColPrmt';
import { RowPrmt } from '@/primitives/RowPrmt/RowPrmt';

interface ITaskCnstrProps {
	title: string | ReactNode;
	children: ReactNode;
}

export const TaskCnstr: FC<ITaskCnstrProps> = ({ title, children }) => {
	return (
		<LayoutPrmt buttons={[]} title="Task Page" avatar={{ title: 'AV' }}>
			<CardPrmt title={title}>
				{children}
				<RowPrmt>
					<ColPrmt span={24}>
						<WidgetContainerPrmt>
							<TextTime1Cnstr text="" durationStart="" />
						</WidgetContainerPrmt>
					</ColPrmt>
				</RowPrmt>
			</CardPrmt>
		</LayoutPrmt>
	);
};
