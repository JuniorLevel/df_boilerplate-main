```jsx
import React from 'react';
import { Outlet, createRootRoute, createRoute, createRouter, createMemoryHistory, RouterProvider } from '@tanstack/react-router';
import { Col, Pagination as OrdersPagination } from 'antd';
import { OrdersFilterProvider, OrderListPreviewContainer, Layout, OrdersFilterClosed, OrdersFilterDesktopDialog, OrderListItem, Order, OrderListContainer } from '@/components';
import { sidebarButtons, data, filters } from './data';
import { RouterWrapper, OutletComponent } from '../Wrapper';

const rootRoute = createRootRoute({
	component: function RootComponent() {
		return (
			<OrdersFilterProvider>
				<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
					<OrdersFilterClosed open={false} dialog filters={filters} />
					<OrderListPreviewContainer height={160}>
						<Col span={12}>
							<OrderListContainer>
								<OrderListItem key={data[0].id} data={data[0]} />
								<OrderListItem key={data[1].id} data={data[1]} />
								<OrderListItem key={data[2].id} data={data[2]} />
								<OrderListItem key={data[3].id} data={data[3]} />
								<OrderListItem key={data[4].id} data={data[4]} />
								<OrderListItem key={data[5].id} data={null} />
							</OrderListContainer>
							<OrdersPagination total={50} />
						</Col>
						<Col span={12}>
							<Order />
						</Col>
					</OrderListPreviewContainer>
				</Layout>
				<OutletComponent />
			</OrdersFilterProvider>
		);
	},
});

const IndexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: function IndexComponent() {
		return <div />;
	},
});

const DialogRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/dialog',
	component: function DialogComponent() {
		return <OrdersFilterDesktopDialog />;
	},
});

const routeTree = rootRoute.addChildren([IndexRoute, DialogRoute]);

const memoryHistory = createMemoryHistory({
	initialEntries: ['/'],
});

const router = createRouter({ routeTree, history: memoryHistory });

<RouterWrapper router={router} />;
``````jsx noeditor
import Image1 from './OrdersFilterClosedWithDialogPage.png';
<img src={Image1} />;
```;
