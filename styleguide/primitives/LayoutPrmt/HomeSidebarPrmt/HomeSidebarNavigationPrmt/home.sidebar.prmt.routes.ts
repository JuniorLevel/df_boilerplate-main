// @flow
import { ChromeOutlined, WindowsOutlined, AppleOutlined } from '@ant-design/icons';

interface IHomeSidebarRoutes {
	id: number;
	name: string;
	path: string;
	icon: React.ComponentType<any>;
}

export const homeSidebarRoutes: IHomeSidebarRoutes[] = [
	{
		id: 1,
		name: 'Orders',
		path: '/home/orders',
		icon: WindowsOutlined,
	},
	{
		id: 2,
		name: 'Compare',
		path: '/home/compare',
		icon: ChromeOutlined,
	},
	{
		id: 3,
		name: 'Admin',
		path: '/home/admin',
		icon: AppleOutlined,
	},
];
