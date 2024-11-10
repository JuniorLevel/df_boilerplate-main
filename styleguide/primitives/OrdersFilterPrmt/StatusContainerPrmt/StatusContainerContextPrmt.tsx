import React, { createContext, FC, ReactNode, useMemo, useState } from 'react';

interface IStatusProviderPrmtProps {
	children: ReactNode;
}

interface IStatusContextPrmtProps {
	status: string;
	setStatus: (newStatus: string) => void;
	counter: number;
	setCounter: (newCounter: number) => void;
	role: string;
	setRole: (newRole: string) => void;
}

export const StatusContextPrmt = createContext<IStatusContextPrmtProps>({
	status: 'updated',
	setStatus: () => {},
	counter: 0,
	setCounter: () => {},
	role: 'Assigned',
	setRole: () => {},
});

export const StatusProviderPrmt: FC<IStatusProviderPrmtProps> = ({ children }) => {
	const [status, setStatus] = useState('updated');
	const [counter, setCounter] = useState(0);
	const [role, setRole] = useState('');

	const value = useMemo(() => ({ status, setStatus, counter, setCounter, role, setRole }), [status, setStatus, counter, setCounter, role, setRole]);

	return <StatusContextPrmt.Provider value={value}>{children}</StatusContextPrmt.Provider>;
};
