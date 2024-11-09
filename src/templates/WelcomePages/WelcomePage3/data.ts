import Image1 from '../pictures/Image1.jpg';
import Image2 from '../pictures/Image2.jpg';
import Image3 from '../pictures/Image3.jpg';
import Image4 from '../pictures/Image4.jpg';

interface IWelcomeButtons {
	id: number;
	title: string;
	onClick: () => void;
}

interface IImages {
	id: number;
	url: string;
}

export const images: IImages[] = [
	{ id: 1, url: Image1 },
	{ id: 2, url: Image2 },
	{ id: 3, url: Image3 },
	{ id: 4, url: Image4 },
];

export const welcomeButtons: IWelcomeButtons[] = [
	{
		id: 1,
		title: 'email',
		onClick: () => {},
	},
	{
		id: 2,
		title: 'LogIn',
		onClick: () => {},
	},
	{
		id: 3,
		title: 'CreateAccount',
		onClick: () => {},
	},
];

export const authButtons = [
	{ id: 1, title: 'G', onClick: () => {} },
	{ id: 2, title: 'VK', onClick: () => {} },
	{ id: 3, title: 'G', onClick: () => {} },
	{ id: 4, title: 'VK', onClick: () => {} },
	{ id: 5, title: 'G', onClick: () => {} },
	{ id: 6, title: 'VK', onClick: () => {} },
	{ id: 7, title: 'G', onClick: () => {} },
	{ id: 8, title: 'VK', onClick: () => {} },
	{ id: 9, title: 'G', onClick: () => {} },
	{ id: 10, title: 'VK', onClick: () => {} },
];
