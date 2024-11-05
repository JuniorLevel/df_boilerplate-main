import React, { FC } from 'react';
import { Col, Row, Pagination as OrdersPagination } from 'antd';
import { sidebarButtons, filters, data } from './data';
import { Layout } from '@/primitives/Layout/Layout';
import { Footer } from '@/primitives/Footer/Footer';
import { OrdersFilterProvider } from '@/tmp/OrdersFilter/OrdersFilterContext';
import { OrdersFilterClosed } from '@/tmp/OrdersFilter/OrdersFilterClosed/OrdersFilterClosed';
import { OrderListPreviewContainer } from '@/tmp/OrderListPreview/OrderListPreviewContainer/OrderListPreviewContainer';
import { OrderListContainer } from '@/tmp/OrderListPreview/OrderListContainer/OrderListContainer';
import { OrderListItem } from '@/tmp/OrderListPreview/OrderListContainer/OrderListItem/OrderListItem';
import { Order } from '@/tmp/OrderListPreview/Order/Order';

export const DiffClosedCardsPage: FC = () => (
	<OrdersFilterProvider>
		<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }} footer={<Footer />}>
			<Row gutter={[16, 16]}>
				<Col span={12}>
					<OrdersFilterClosed open={false} dialog={false} filters={filters} />
					<OrderListPreviewContainer>
						<Col span={12}>
							<OrderListContainer>
								<OrderListItem key={data[0].id} data={data[0]} />
								<OrderListItem key={data[1].id} data={data[1]} />
								<OrderListItem key={data[2].id} data={data[2]} />
								<OrderListItem key={data[3].id} data={data[3]} />
								<OrderListItem key={data[4].id} data={data[4]} />
								<OrderListItem key={data[5].id} data={data[5]} />
								<OrderListItem key={data[6].id} data={null} />
							</OrderListContainer>
							<OrdersPagination defaultCurrent={1} total={50} />
						</Col>
						<Col span={12}>
							<Order />
						</Col>
					</OrderListPreviewContainer>
				</Col>
				<Col span={12}>
					<OrdersFilterClosed open={false} dialog={false} filters={filters} />
					<OrderListPreviewContainer>
						<Col span={12}>
							<OrderListContainer>
								<OrderListItem key={data[0].id} data={data[0]} />
								<OrderListItem key={data[1].id} data={data[1]} />
								<OrderListItem key={data[2].id} data={data[2]} />
								<OrderListItem key={data[3].id} data={data[3]} />
								<OrderListItem key={data[4].id} data={data[4]} />
								<OrderListItem key={data[5].id} data={data[5]} />
								<OrderListItem key={data[6].id} data={null} />
							</OrderListContainer>
							<OrdersPagination defaultCurrent={1} total={50} />
						</Col>
						<Col span={12}>
							<Order />
						</Col>
					</OrderListPreviewContainer>
				</Col>
			</Row>
		</Layout>
	</OrdersFilterProvider>
);
