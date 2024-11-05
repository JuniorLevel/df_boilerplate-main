// @flow

import Image1 from '../pictures/Image1.jpg';
import Image2 from '../pictures/Image2.jpg';
import Image3 from '../pictures/Image3.jpg';
import Image4 from '../pictures/Image4.jpg';

export const images = [
	{ id: 1, url: Image1 },
	{ id: 2, url: Image2 },
	{ id: 3, url: Image3 },
	{ id: 4, url: Image4 },
];

export const welcomeButtons = [
	{
		id: 1,
		title: 'email',
		onClick: (): void => alert('email'),
	},
	{
		id: 2,
		title: 'LogIn',
		onClick: (): void => alert('LogIn'),
	},
	{
		id: 3,
		title: 'CreateAccount',
		onClick: (): void => alert('CreateAccount'),
	},
];

export const authButtons = [
	{ id: 1, title: 'G', onClick: (): void => alert('click1') },
	{ id: 2, title: 'VK', onClick: (): void => alert('click2') },
	{ id: 3, title: 'G', onClick: (): void => alert('click3') },
	{ id: 4, title: 'VK', onClick: (): void => alert('click4') },
	{ id: 5, title: 'G', onClick: (): void => alert('click5') },
	{ id: 6, title: 'VK', onClick: (): void => alert('click6') },
	{ id: 7, title: 'G', onClick: (): void => alert('click7') },
	{ id: 8, title: 'VK', onClick: (): void => alert('click8') },
	{ id: 9, title: 'G', onClick: (): void => alert('click9') },
	{ id: 10, title: 'VK', onClick: (): void => alert('click10') },
];
