/* eslint-disable eslint-restrict-imports/restrict-imports */
import React from 'react';
import { Form, Input } from 'formik-antd';
import { Formik, useFormik } from 'formik';
import { useCreateTask } from '../useCreateTask';
import * as Yup from 'yup';

export const TaskForm = () => {
	const formik = useFormik({
		initialValues: { taskTitle: '' },
		onSubmit: (values) => {
			alert(JSON.stringify(values));
		},
	});
	const validationSchema = Yup.object({
		taskTitle: Yup.string().required('Required'),
	});
	const { createTask } = useCreateTask();

	return (
		<Formik
			initialValues={formik.initialValues}
			validationSchema={validationSchema}
			onSubmit={(values, actions) => {
				createTask(values.taskTitle);
				actions.resetForm();
			}}
		>
			<Form>
				<Input name="taskTitle" placeholder="Введите название задачи" onChange={formik.handleChange} />
			</Form>
		</Formik>
	);
};
