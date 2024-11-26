import React, { FC } from 'react';
import { sidebarButtons } from './data';
import { OrderTabsPrmt } from '@/primitives/OrderTabsPrmt/OrderTabsPrmt';
import { LayoutPrmt } from '@/primitives/LayoutPrmt/LayoutPrmt';
import { BadgePrmt } from '@/primitives/BadgePrmt/BadgePrmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import { Link, Outlet } from '@tanstack/react-router';

export const OrderPage: FC = () => (
	<LayoutPrmt buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
		<OrderTabsPrmt
			items={[
				{
					key: 1,
					label: (
						<FlexPrmt gap={10} align="center">
							<Link to="/orderPage/main">Main info</Link>
							<BadgePrmt count={3} />
						</FlexPrmt>
					),
					children: <Outlet />,
				},
				{
					key: 2,
					label: (
						<FlexPrmt gap={10} align="center">
							<Link to="/orderPage/chat">Chat</Link>
							<BadgePrmt count={3} />
						</FlexPrmt>
					),
					children: <Outlet />,
				},
				{
					key: 3,
					label: (
						<FlexPrmt gap={10} align="center">
							<Link to="/orderPage/dashboard">Dashboard</Link>
							<BadgePrmt count={3} />
						</FlexPrmt>
					),
					children: <Outlet />,
				},
				{
					key: 4,
					label: (
						<FlexPrmt gap={10} align="center">
							<Link to="/orderPage/documents">Documents</Link>
							<BadgePrmt count={3} />
						</FlexPrmt>
					),
					children: <Outlet />,
				},
				{
					key: 5,
					label: (
						<FlexPrmt gap={10} align="center">
							<Link to="/orderPage/history">History</Link>
							<BadgePrmt count={3} />
						</FlexPrmt>
					),
					children: <Outlet />,
				},
			]}
		/>
	</LayoutPrmt>
);
