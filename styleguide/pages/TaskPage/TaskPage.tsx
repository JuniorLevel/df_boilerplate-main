import { TaskCnstr } from '@/construct/TaskCnstr/TaskCnstr';
import { TextTime1Cnstr } from '@/construct/TextTime1Cnstr/TextTime1Cnstr';
import React, { FC, useContext } from 'react';
import { TaskItemCnstr } from '@/construct/TaskCnstr/TaskItemCnstr/TaskItemCnstr';
import { TaskContextCnstr } from '@/construct/TaskCnstr/TaskContextCnstr';
import { TaskFormCnstr } from '@/construct/TaskCnstr/TaskForms/TaskFormCnstr/TaskFormCnstr';
import { TaskWithDurationFormCnstr } from '@/construct/TaskCnstr/TaskForms/TaskWithDurationFormCnstr/TaskWithDurationFormCnstr';
import { TaskUploadFileFormCnstr } from '@/construct/TaskCnstr/TaskForms/TaskUploadFileFormCnstr/TaskUploadFileFormCnstr';
import { TaskAddExecutorFormCnstr } from '@/construct/TaskCnstr/TaskForms/TaskAddExecutorFormCnstr/TaskAddExecutorFormCnstr';
import { FileTimeCnstr } from '@/construct/FileTimeCnstr/FileTimeCnstr';
import { TextRangeTimeCnstr } from '@/construct/TextRangeTimeCnstr/TextRangeTimeCnstr';
import { PersonRoleTimeCnstr } from '@/construct/PersonRoleTimeCnstr/PersonRoleTimeCnstr';

export const TaskPage: FC = () => {
	const { currentSelectValue, tasks } = useContext(TaskContextCnstr);

	return (
		<TaskCnstr
			title={(() => {
				switch (currentSelectValue) {
					case 'task':
						return <TaskFormCnstr />;
					case 'taskWithDuration':
						return <TaskWithDurationFormCnstr />;
					case 'uploadFile':
						return <TaskUploadFileFormCnstr />;
					case 'addExecutor':
						return <TaskAddExecutorFormCnstr />;
					default:
						return <div />;
				}
			})()}
		>
			{tasks.map((item) => {
				if (item.taskName === 'task') {
					return (
						<TaskItemCnstr key={item.id}>
							<TextTime1Cnstr text={item.title} durationStart={item.duration.start} />
						</TaskItemCnstr>
					);
				}
				if (item.taskName === 'taskWithDuration') {
					return (
						<TaskItemCnstr key={item.id}>
							<TextRangeTimeCnstr text={item.title} duration={item.duration} />
						</TaskItemCnstr>
					);
				}
				if (item.taskName === 'uploadFile') {
					return (
						<TaskItemCnstr key={item.id}>
							<FileTimeCnstr fileName={item.title} fio="FIO" durationStart={item.duration.start} />
						</TaskItemCnstr>
					);
				}
				if (item.taskName === 'addExecutor') {
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
