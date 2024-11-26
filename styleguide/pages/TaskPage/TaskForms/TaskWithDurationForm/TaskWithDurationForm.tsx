/* eslint-disable eslint-restrict-imports/restrict-imports */
import React from 'react';
import { Form, Input, SubmitButton } from 'formik-antd';
import { ErrorMessage, Formik, useFormik } from 'formik';
import { useCreateTask } from '../useCreateTask';
import { FormContainerCnstr } from '@/construct/TaskCnstr/FormContainerCnstr/FormContainerCnstr';
import * as Yup from 'yup';

export const TaskWithDurationForm = () => {
	const formik = useFormik({
		initialValues: { taskTitle: '', durationEnd: '' },
		onSubmit: (values) => {
			alert(JSON.stringify(values));
		},
	});
	const validationSchema = Yup.object({
		taskTitle: Yup.string().required('Required'),
		durationEnd: Yup.string()
			.required('')
			.matches(/^\d{2}\.\d{2}\.\d{2}-\d{2}:\d{2}:\d{2}$/, 'Правильный формат - 01.01.70-13:00:00'),
	});
	const { createTaskWithDuration } = useCreateTask();

	return (
		<Formik
			initialValues={formik.initialValues}
			validationSchema={validationSchema}
			onSubmit={(values, actions) => {
				createTaskWithDuration(values.taskTitle, values.durationEnd);
				actions.resetForm();
				console.log(values, 'val');
			}}
		>
			<Form>
				<FormContainerCnstr>
					<Input name="taskTitle" placeholder="Введите название задачи" onChange={formik.handleChange} />
					<Input name="durationEnd" placeholder="Введите крайний срок выполнения задачи в формате '01.01.70-13:00:00'" onChange={formik.handleChange} />
					<ErrorMessage name="durationEnd" />
					<SubmitButton loading={false}>Создать задачу</SubmitButton>
				</FormContainerCnstr>
			</Form>
		</Formik>
	);
};
