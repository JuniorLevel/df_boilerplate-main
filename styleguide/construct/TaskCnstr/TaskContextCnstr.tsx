import React, { createContext, FC, ReactNode, useMemo, useState } from 'react';
import { ITask } from './interfaces/interfaces';

interface ITaskProviderCnstrProps {
	children: ReactNode;
}

interface ITaskContextCnstrProps {
	currentSelectValue: string;
	setCurrentSelectValue: (currentSelectValue: string) => void;
	tasks: ITask[];
	setTasks: (tasks: ITask[]) => void;
}

export const TaskContextCnstr = createContext<ITaskContextCnstrProps>({
	currentSelectValue: 'task',
	setCurrentSelectValue: () => {},
	tasks: [],
	setTasks: () => {},
});

export const TaskProviderCnstr: FC<ITaskProviderCnstrProps> = ({ children }) => {
	const [currentSelectValue, setCurrentSelectValue] = useState('task');
	const [tasks, setTasks] = useState<ITask[]>([]);

	const value = useMemo<ITaskContextCnstrProps>(
		() => ({
			currentSelectValue,
			setCurrentSelectValue,
			tasks,
			setTasks,
		}),
		[currentSelectValue, setCurrentSelectValue, tasks, setTasks]
	);

	return <TaskContextCnstr.Provider value={value}>{children}</TaskContextCnstr.Provider>;
};
