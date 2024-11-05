// @flow

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
];
