```tsx
import { OrdersFilterOpenedPrmt } from './OrdersFilterOpenedPrmt';
import { OrdersFilterProviderPrmt } from '../../OrdersFilterPrmt/OrdersFilterContextPrmt';

const filters = [
	{
		id: 1,
		cardItem: [{ id: 1, status: 'changed', text: 'lorem-1' }],
	},

	{
		id: 2,
		cardItem: [
			{ id: 1, status: 'updated', text: 'project-1' },
			{ id: 2, status: 'changed', text: 'project-2' },
			{ id: 3, status: 'updated', text: 'project-3' },
		],
	},
];

<OrdersFilterProviderPrmt>
	<OrdersFilterOpenedPrmt open filters={filters} />
</OrdersFilterProviderPrmt>
