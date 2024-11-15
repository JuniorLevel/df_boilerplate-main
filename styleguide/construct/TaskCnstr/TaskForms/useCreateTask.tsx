import { useContext } from 'react';
import { TaskContextCnstr } from '../TaskContextCnstr';
import { ITask } from '../interfaces/interfaces';

export const useCreateTask = () => {
	const createCurrentDate = () => {
		const date = new Date();
		const currentDate = `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getFullYear()).slice(-2).padStart(2, '0')}`;
		const currentTime = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
		return `${currentDate}-${currentTime}`;
	};

	const { currentSelectValue, tasks, setTasks } = useContext(TaskContextCnstr);

	// Функция submit TaskFormCnstr
	const createTask = (taskTitle: string) => {
		const durationStart = createCurrentDate();
		const newTask: ITask = {
			id: String(Date.now()),
			title: taskTitle,
			executor: '',
			duration: { id: String(Date.now()), start: durationStart, end: '' },
			taskName: String(currentSelectValue),
		};
		setTasks([newTask, ...tasks]);
	};

	// Функция submit TaskWithDurationFormCnstr
	const createTaskWithDuration = (taskTitle: string, durationEnd: string) => {
		const durationStart = createCurrentDate();
		const newTask: ITask = {
			id: String(Date.now()),
			title: taskTitle,
			executor: '',
			duration: { id: String(Date.now()), start: durationStart, end: durationEnd },
			taskName: String(currentSelectValue),
		};
		setTasks([newTask, ...tasks]);
	};

	// Функция submit TaskUploadFileFormCnstr
	const createTaskUploadFileForm = (fileName: string) => {
		const durationStart = createCurrentDate();
		const newTask: ITask = {
			id: String(Date.now()),
			title: fileName,
			executor: '',
			duration: { id: String(Date.now()), start: durationStart, end: '' },
			taskName: String(currentSelectValue),
		};
		setTasks([newTask, ...tasks]);
	};

	// Функция submit TaskAddExecutorFormCnstr
	const createTaskAddExecutorForm = (executor: string) => {
		const durationStart = createCurrentDate();
		const newTask: ITask = {
			id: String(Date.now()),
			title: '',
			executor: executor,
			duration: { id: String(Date.now()), start: durationStart, end: '' },
			taskName: String(currentSelectValue),
		};
		setTasks([newTask, ...tasks]);
	};

	return { createTask, createTaskWithDuration, createTaskUploadFileForm, createTaskAddExecutorForm };
};
