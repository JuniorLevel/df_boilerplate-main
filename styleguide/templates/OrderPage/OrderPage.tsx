import React, { FC } from 'react';
import { filters, items, sidebarButtons } from './data';
import { OrderTabsPrmt } from '@/primitives/OrderTabsPrmt/OrderTabsPrmt';
import { LayoutPrmt } from '@/primitives/LayoutPrmt/LayoutPrmt';
import { OrderContainerPrmt } from '@/primitives/OrderTabsPrmt/OrderContainerPrmt/OrderContainerPrmt';
import { OrderVersionPrmt } from '@/primitives/OrderTabsPrmt/OrderVersionPrmt/OrderVersionPrmt';
import { OrderPreviewPrmt } from '@/primitives/OrderTabsPrmt/OrderPreviewPrmt/OrderPreviewPrmt';
import { BadgePrmt } from '@/primitives/BadgePrmt/BadgePrmt';
import { RowPrmt } from '@/primitives/RowPrmt/RowPrmt';
import { ColPrmt } from '@/primitives/ColPrmt/ColPrmt';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import { CardPrmt } from '@/primitives/CardPrmt/CardPrmt';
import { WidgetContainerPrmt } from '@/primitives/WidgetContainerPrmt/WidgetContainerPrmt';
import { TextTime1Cnstr } from '@/construct/TextTime1Cnstr/TextTime1Cnstr';
import { TextRangeTimeCnstr } from '@/construct/TextRangeTimeCnstr/TextRangeTimeCnstr';
import { TextPrmt } from '@/primitives/TextPrmt/TextPrmt';
import { TimeRangeWidgetCnstr } from '@/construct/TimeRangeWidgetCnstr/TimeRangeWidgetCnstr';
import { PersonRoleCnstr } from '@/construct/PersonRoleCnstr/PersonRoleCnstr';
import { PersonRoleTimeCnstr } from '@/construct/PersonRoleTimeCnstr/PersonRoleTimeCnstr';
import { TimeWidgetCnstr } from '@/construct/TimeWidgetCnstr/TimeWidgetCnstr';
import { FileTimeCnstr } from '@/construct/FileTimeCnstr/FileTimeCnstr';
import { FileWidgetCnstr } from '@/construct/FileWidgetCnstr/FileWidgetCnstr';

export const OrderPage: FC = () => (
	<LayoutPrmt buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
		<OrderTabsPrmt
			items={[
				{
					key: 1,
					label: (
						<FlexPrmt gap={10} align="center">
							<div>Main info</div>
							<BadgePrmt count={3} />
						</FlexPrmt>
					),
					children: (
						<CardPrmt
							title={
								<WidgetContainerPrmt>
									<TextTime1Cnstr text="" fullDate={{ date: '13.08.99', time: '20:55:55' }} />
								</WidgetContainerPrmt>
							}
						>
							<RowPrmt>
								<ColPrmt span={24}>
									<WidgetContainerPrmt>
										<TextRangeTimeCnstr
											text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf"
											fullDate={{ date: '13.08.99', time: '20:55:55' }}
										/>
									</WidgetContainerPrmt>
								</ColPrmt>
							</RowPrmt>
							<RowPrmt>
								<ColPrmt span={24}>
									<WidgetContainerPrmt>
										<TimeRangeWidgetCnstr fullDate={{ date: '13.08.99', time: '20:55:55' }}>
											<TextPrmt text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
										</TimeRangeWidgetCnstr>
									</WidgetContainerPrmt>
								</ColPrmt>
							</RowPrmt>
							<RowPrmt>
								<ColPrmt span={24}>
									<WidgetContainerPrmt>
										<PersonRoleTimeCnstr fullDate={{ date: '13.08.99', time: '20:55:55' }} userRole="Assigned" fio="FIO FIO FIO FIO" />
									</WidgetContainerPrmt>
								</ColPrmt>
							</RowPrmt>
							<RowPrmt>
								<ColPrmt span={24}>
									<WidgetContainerPrmt>
										<TimeWidgetCnstr fullDate={{ date: '13.08.99', time: '20:55:55' }}>
											<PersonRoleCnstr userRole="Assigned" fio="FIO FIO FIO FIO" />
										</TimeWidgetCnstr>
									</WidgetContainerPrmt>
								</ColPrmt>
							</RowPrmt>
							<RowPrmt>
								<ColPrmt span={24}>
									<WidgetContainerPrmt>
										<FileTimeCnstr fullDate={{ date: '13.08.99', time: '20:55:55' }} fio="FIO" text="File.txt" />
									</WidgetContainerPrmt>
								</ColPrmt>
							</RowPrmt>
							<RowPrmt>
								<ColPrmt span={24}>
									<WidgetContainerPrmt>
										<FileWidgetCnstr fullDate={{ date: '13.08.99', time: '20:55:55' }} fio="FIO">
											<TextPrmt text="File.txt" />
										</FileWidgetCnstr>
									</WidgetContainerPrmt>
								</ColPrmt>
							</RowPrmt>
						</CardPrmt>
					),
				},
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
						<OrderContainerPrmt>
							<RowPrmt gutter={[16, 16]}>
								<ColPrmt xs={12}>
									<RowPrmt gutter={[16, 16]}>
										<ColPrmt xs={12}>
											<OrderVersionPrmt filters={filters} />
										</ColPrmt>
										<ColPrmt xs={12}>
											<OrderPreviewPrmt />
										</ColPrmt>
									</RowPrmt>
								</ColPrmt>

								<ColPrmt xs={12}>
									<RowPrmt gutter={[16, 16]}>
										<ColPrmt xs={12}>
											<OrderPreviewPrmt />
										</ColPrmt>
										<ColPrmt xs={12}>
											<OrderVersionPrmt filters={filters} />
										</ColPrmt>
									</RowPrmt>
								</ColPrmt>
							</RowPrmt>
						</OrderContainerPrmt>
					),
				},
			]}
		/>
	</LayoutPrmt>
);
