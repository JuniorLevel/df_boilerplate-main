import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import React, { ReactNode } from 'react';
import { BagdePrmt } from '@/primitives/BagdePrmt/BagdePrmt';

export const sidebarButtons = [
	{
		id: 1,
		title: 'Orders',
		onClick: () => {},
	},
	{
		id: 2,
		title: 'Compare',
		onClick: () => {},
	},
	{
		id: 3,
		title: 'Admin',
		onClick: () => {},
	},
];

export const filters = [
	{
		title: 'Group 1',
		description: 'Order by John',
	},
	{
		title: 'Group 2',
		description: 'Order by Smith',
	},
	{
		title: 'Group 3',
		description: 'Order by Sam',
	},
	{
		title: 'Group 4',
		description: 'Order by Nick',
	},
	{
		title: 'Group 5',
		description: 'Order by Merry',
	},
	{
		title: 'Group 6',
		description: 'Order by Scott',
	},
];

export const items = [
	{
		key: 1,
		label: (
			<FlexPrmt gap={10} align="center">
				<div>Main info</div>
				<BagdePrmt count={3} />
			</FlexPrmt>
		) as React.ReactNode,
		children: (<div>Content of Tab Pane 1</div>) as ReactNode,
	},
	{
		key: 2,
		label: (
			<FlexPrmt gap={10} align="center">
				<div>Chat</div>
				<BagdePrmt count={3} />
			</FlexPrmt>
		) as React.ReactNode,
		children: (<div>Content of Tab Pane 2</div>) as ReactNode,
	},
	{
		key: 3,
		label: (
			<FlexPrmt gap={10} align="center">
				<div>Dashboard</div>
				<BagdePrmt count={3} />
			</FlexPrmt>
		) as React.ReactNode,
		children: (<div>Content of Tab Pane 3</div>) as ReactNode,
	},
	{
		key: 4,
		label: (
			<FlexPrmt gap={10} align="center">
				<div>Documents</div>
				<BagdePrmt count={3} />
			</FlexPrmt>
		) as React.ReactNode,
		children: (<div>Content of Tab Pane 4</div>) as ReactNode,
	},
];
