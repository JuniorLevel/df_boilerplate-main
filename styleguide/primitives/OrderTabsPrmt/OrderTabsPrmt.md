```tsx
import { OrderTabsPrmt } from './OrderTabsPrmt';
import { FlexPrmt } from '../FlexPrmt/FlexPrmt';
import { BadgePrmt } from '../BadgePrmt/BadgePrmt';

const items = [
	{
		key: 1,
		label: (
			<FlexPrmt gap={10} align="center">
				<div>Main info</div>
				<BadgePrmt count={3} />
			</FlexPrmt>
		),
		children: (<div>Content of Tab Pane 1</div>),
	},
	{
		key: 2,
		label: (
			<FlexPrmt gap={10} align="center">
				<div>Chat</div>
				<BadgePrmt count={3} />
			</FlexPrmt>
		),
		children: (<div>Content of Tab Pane 2</div>),
	},
	{
		key: 3,
		label: (
			<FlexPrmt gap={10} align="center">
				<div>Dashboard</div>
				<BadgePrmt count={3} />
			</FlexPrmt>
		),
		children: (<div>Content of Tab Pane 3</div>),
	},
	{
		key: 4,
		label: (
			<FlexPrmt gap={10} align="center">
				<div>Documents</div>
				<BadgePrmt count={3} />
			</FlexPrmt>
		),
		children: (<div>Content of Tab Pane 4</div>),
	},
];

<OrderTabsPrmt
	items={[
		...items,
		{
			key: 5,
			label: (
				<FlexPrmt gap={10} align="center">
					<div>History</div>
					<BadgePrmt count={3} />
				</FlexPrmt>
			),
			children: (
				<div>Content</div>
			),
		},
	]}
/>;
