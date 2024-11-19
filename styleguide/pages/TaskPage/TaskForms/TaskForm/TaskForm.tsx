/* eslint-disable eslint-restrict-imports/restrict-imports */
import React from 'react';
import { Form, Input } from 'formik-antd';
import { Formik, useFormik } from 'formik';
import { useCreateTask } from '../useCreateTask';

export const TaskForm = () => {
	const formik = useFormik({
		initialValues: { taskTitle: '' },
		onSubmit: (values: any) => {
			alert(JSON.stringify(values));
		},
	});
	const { createTask } = useCreateTask();

	return (
		<Formik
			initialValues={formik.initialValues}
			onSubmit={(values) => {
				createTask(values.taskTitle);
			}}
		>
			<Form>
				<Input name="taskTitle" placeholder="Введите название задачи" onChange={formik.handleChange} />
			</Form>
		</Formik>
	);
};
