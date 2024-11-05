import React, { createContext, FC, ReactNode, useMemo, useState } from 'react';

interface IStatusProvider {
	children: ReactNode;
}

interface IStatusContext {
	status: string;
	setStatus: (newStatus: string) => void;
	counter: number;
	setCounter: (newCounter: number) => void;
	role: string;
	setRole: (newRole: string) => void;
}

export const StatusContext = createContext<IStatusContext>({
	status: 'updated',
	setStatus: () => {},
	counter: 0,
	setCounter: () => {},
	role: 'Assigned',
	setRole: () => {},
});

export const StatusProvider: FC<IStatusProvider> = ({ children }) => {
	const [status, setStatus] = useState('updated');
	const [counter, setCounter] = useState(0);
	const [role, setRole] = useState('');

	const value = useMemo(() => ({ status, setStatus, counter, setCounter, role, setRole }), [status, setStatus, counter, setCounter, role, setRole]);

	return <StatusContext.Provider value={value}>{children}</StatusContext.Provider>;
};
