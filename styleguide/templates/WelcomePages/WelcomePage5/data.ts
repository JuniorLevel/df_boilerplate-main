interface IWelcomeButtons {
	id: number;
	title: string;
	onClick: () => void;
}

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
];
