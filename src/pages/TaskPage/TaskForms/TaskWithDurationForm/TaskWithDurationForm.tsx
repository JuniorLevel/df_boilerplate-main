/* eslint-disable eslint-restrict-imports/restrict-imports */
import React from 'react';
import { Form, Input, SubmitButton } from 'formik-antd';
import { Formik, useFormik } from 'formik';
import { useCreateTask } from '../useCreateTask';
import { FormContainerCnstr } from '@/construct/TaskCnstr/FormContainerCnstr/FormContainerCnstr';

export const TaskWithDurationForm = () => {
	const formik = useFormik({
		initialValues: { taskTitle: '', durationEnd: '' },
		onSubmit: (values: any) => {
			alert(JSON.stringify(values));
		},
	});
	const { createTaskWithDuration } = useCreateTask();

	return (
		<Formik
			initialValues={formik.initialValues}
			onSubmit={(values) => {
				createTaskWithDuration(values.taskTitle, values.durationEnd);
				console.log(values, 'val');
			}}
		>
			<Form>
				<FormContainerCnstr>
					<Input name="taskTitle" placeholder="Введите название задачи" onChange={formik.handleChange} />
					<Input name="durationEnd" placeholder="Введите крайний срок выполнения задачи в формате '01.01.70-13:00:00'" onChange={formik.handleChange} />
					<SubmitButton loading={false}>Создать задачу</SubmitButton>
				</FormContainerCnstr>
			</Form>
		</Formik>
	);
};
