import React, { FC } from 'react';
import { Outlet, createRootRoute, createRoute, createRouter, createMemoryHistory, RouterProvider } from '@tanstack/react-router';
import { Row, Col, Pagination as OrdersPagination } from 'antd';
import { sidebarButtons, data, filters } from './data';
import { Layout } from '@/primitives/Layout/Layout';
import { Footer } from '@/primitives/Footer/Footer';
import { OrdersFilterProvider } from '@/tmp/OrdersFilter/OrdersFilterContext';
import { OrdersFilterOpened } from '@/tmp/OrdersFilter/OrdersFilterOpened/OrdersFilterOpened';
import { OrderListPreviewContainer } from '@/tmp/OrderListPreview/OrderListPreviewContainer/OrderListPreviewContainer';
import { OrderListDiffContainer } from '@/tmp/OrderListPreview/OrderListDiffContainer/OrderListDiffContainer';
import { OrderListItem } from '@/tmp/OrderListPreview/OrderListContainer/OrderListItem/OrderListItem';
import { Order } from '@/tmp/OrderListPreview/Order/Order';
import { OrdersFilterDesktopDialog } from '@/tmp/OrdersFilter/OrdersFilterDialogs/OrdersFilterDesktopDialog/OrdersFilterDesktopDialog';

const rootRoute = createRootRoute({
	component: function RootComponent() {
		return (
			<OrdersFilterProvider>
				<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }} footer={<Footer />}>
					<Row gutter={[16, 16]}>
						<Col span={12}>
							<OrdersFilterOpened open dialog filters={filters} />
							<OrderListPreviewContainer>
								<Col span={12}>
									<OrderListDiffContainer>
										<OrderListItem key={data[0].id} data={data[0]} />
										<OrderListItem key={data[1].id} data={data[1]} />
										<OrderListItem key={data[2].id} data={data[2]} />
										<OrderListItem key={data[3].id} data={data[3]} />
										<OrderListItem key={data[4].id} data={data[4]} />
										<OrderListItem key={data[5].id} data={data[5]} />
										<OrderListItem key={data[6].id} data={null} />
									</OrderListDiffContainer>
									<OrdersPagination defaultCurrent={1} total={50} />
								</Col>
								<Col span={12}>
									<Order />
								</Col>
							</OrderListPreviewContainer>
						</Col>
						<Col span={12}>
							<OrdersFilterOpened open dialog filters={filters} />
							<OrderListPreviewContainer>
								<Col span={12}>
									<OrderListDiffContainer>
										<OrderListItem key={data[0].id} data={data[0]} />
										<OrderListItem key={data[1].id} data={data[1]} />
										<OrderListItem key={data[2].id} data={data[2]} />
										<OrderListItem key={data[3].id} data={data[3]} />
										<OrderListItem key={data[4].id} data={data[4]} />
										<OrderListItem key={data[5].id} data={data[5]} />
										<OrderListItem key={data[6].id} data={null} />
									</OrderListDiffContainer>
									<OrdersPagination defaultCurrent={1} total={50} />
								</Col>
								<Col span={12}>
									<Order />
								</Col>
							</OrderListPreviewContainer>
						</Col>
					</Row>
				</Layout>
				<Outlet />
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

export const DiffOpenedCardsWithDialogPage: FC = () => <RouterProvider router={router} />;
