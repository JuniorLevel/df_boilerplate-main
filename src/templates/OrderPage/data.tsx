import React from 'react';
import { Flex, Badge } from 'antd';

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
			<Flex gap={10} align="center">
				<div>Main info</div>
				<Badge count={3} />
			</Flex>
		) as React.ReactNode,
		children: (<div>Content of Tab Pane 1</div>) as React.ReactNode,
	},
	{
		key: 2,
		label: (
			<Flex gap={10} align="center">
				<div>Chat</div>
				<Badge count={3} />
			</Flex>
		) as React.ReactNode,
		children: (<div>Content of Tab Pane 2</div>) as React.ReactNode,
	},
	{
		key: 3,
		label: (
			<Flex gap={10} align="center">
				<div>Dashboard</div>
				<Badge count={3} />
			</Flex>
		) as React.ReactNode,
		children: (<div>Content of Tab Pane 3</div>) as React.ReactNode,
	},
	{
		key: 4,
		label: (
			<Flex gap={10} align="center">
				<div>Documents</div>
				<Badge count={3} />
			</Flex>
		) as React.ReactNode,
		children: (<div>Content of Tab Pane 4</div>) as React.ReactNode,
	},
];
