```tsx
import { OrdersFilterClosedPrmt } from './OrdersFilterClosedPrmt';
import { OrdersFilterProviderPrmt } from '../../OrdersFilterPrmt/OrdersFilterContextPrmt';

const filters = [
	{
		id: 1,
		title: 'Flow_typed-1',
		item: [{ id: 1, status: 'updated', text: 'lorem-1' }],
	},

	{
		id: 2,
		title: 'Flow_typed-2',
		item: [
			{ id: 1, status: 'changed', text: 'project-1' },
			{ id: 2, status: 'changed', text: 'project-2' },
			{ id: 3, status: 'updated', text: 'project-3' },
		],
	},
	{
		id: 3,
		title: 'Flow_typed-3',
		item: [
			{ id: 1, status: 'updated', text: 'issue-1' },
			{ id: 2, status: 'updated', text: 'issue-2' },
		],
	},
];
<OrdersFilterProviderPrmt>
	<OrdersFilterClosedPrmt open={false} filters={filters} />	
</OrdersFilterProviderPrmt>