import { TaskCnstr } from '@/construct/TaskCnstr/TaskCnstr';
import { TextTime1Cnstr } from '@/construct/TextTime1Cnstr/TextTime1Cnstr';
import React, { FC, useContext } from 'react';
import { TaskItemCnstr } from '@/construct/TaskCnstr/TaskItemCnstr/TaskItemCnstr';
import { TaskContextCnstr } from '@/construct/TaskCnstr/TaskContextCnstr';
import { TaskForm } from '@/pages/TaskPage/TaskForms/TaskForm/TaskForm';
import { TaskWithDurationForm } from '@/pages/TaskPage/TaskForms/TaskWithDurationForm/TaskWithDurationForm';
import { TaskUploadFileForm } from '@/pages/TaskPage/TaskForms/TaskUploadFileForm/TaskUploadFileForm';
import { TaskAddExecutorForm } from '@/pages/TaskPage/TaskForms/TaskAddExecutorForm/TaskAddExecutorForm';
import { FileTimeCnstr } from '@/construct/FileTimeCnstr/FileTimeCnstr';
import { TextRangeTimeCnstr } from '@/construct/TextRangeTimeCnstr/TextRangeTimeCnstr';
import { PersonRoleTimeCnstr } from '@/construct/PersonRoleTimeCnstr/PersonRoleTimeCnstr';
import { useCreateTask } from '@/pages/TaskPage/TaskForms/useCreateTask';

export const TaskPage: FC = () => {
	const { currentSelectValue, tasks } = useContext(TaskContextCnstr);
	const { form } = useCreateTask();

	return (
		<TaskCnstr
			title={(() => {
				switch (currentSelectValue) {
					case form.task:
						return <TaskForm />;
					case form.taskWithDuration:
						return <TaskWithDurationForm />;
					case form.uploadFile:
						return <TaskUploadFileForm />;
					case form.addExecutor:
						return <TaskAddExecutorForm />;
					default:
						return <div />;
				}
			})()}
		>
			{tasks.map((item) => {
				if (item.taskName === form.task) {
					return (
						<TaskItemCnstr key={item.id}>
							<TextTime1Cnstr text={item.title} durationStart={item.duration.start} />
						</TaskItemCnstr>
					);
				}
				if (item.taskName === form.taskWithDuration) {
					return (
						<TaskItemCnstr key={item.id}>
							<TextRangeTimeCnstr text={item.title} duration={item.duration} />
						</TaskItemCnstr>
					);
				}
				if (item.taskName === form.uploadFile) {
					return (
						<TaskItemCnstr key={item.id}>
							<FileTimeCnstr fileName={item.title} fio="FIO" durationStart={item.duration.start} />
						</TaskItemCnstr>
					);
				}
				if (item.taskName === form.addExecutor) {
					return (
						<TaskItemCnstr key={item.id}>
							<PersonRoleTimeCnstr durationStart={item.duration.start} userRole="Assigned" fio={item.executor} />
						</TaskItemCnstr>
					);
				}
			})}
		</TaskCnstr>
	);
};
