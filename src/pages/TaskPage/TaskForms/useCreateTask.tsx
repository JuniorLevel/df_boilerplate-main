import { useContext } from 'react';
import { TaskContextCnstr } from '../../../construct/TaskCnstr/TaskContextCnstr';
import { ITask } from '../../../construct/TaskCnstr/interfaces/interfaces';

export const useCreateTask = () => {
	const form = {
		task: 'task',
		taskWithDuration: 'taskWithDuration',
		uploadFile: 'uploadFile',
		addExecutor: 'addExecutor',
	};
	const createCurrentDate = () => {
		const date = new Date();
		const currentDate = date.toLocaleDateString();
		const currentFullYear = currentDate.slice(-4);
		const shortedCurrentYear = currentDate.replace(new RegExp(`${currentFullYear}$`), currentFullYear.slice(-2));
		const currentTime = date.toLocaleTimeString();
		return `${shortedCurrentYear}-${currentTime}`;
	};

	const { currentSelectValue, tasks, setTasks } = useContext(TaskContextCnstr);

	// Функция submit TaskForm
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

	// Функция submit TaskWithDurationForm
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

	// Функция submit TaskUploadFileForm
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

	// Функция submit TaskAddExecutorForm
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

	return { form, createTask, createTaskWithDuration, createTaskUploadFileForm, createTaskAddExecutorForm };
};
