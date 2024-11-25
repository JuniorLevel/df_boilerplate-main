/* eslint-disable eslint-restrict-imports/restrict-imports */
import React from 'react';
import { useCreateTask } from '../useCreateTask';
import { Formik, useFormik } from 'formik';
import { Form, Input } from 'formik-antd';
import * as Yup from 'yup';

export const TaskAddExecutorForm = () => {
	const formik = useFormik({
		initialValues: { executor: '' },
		onSubmit: (values) => {
			alert(JSON.stringify(values));
		},
	});
	const validationSchema = Yup.object({
		executor: Yup.string().required('Required'),
	});
	const { createTaskAddExecutorForm } = useCreateTask();

	return (
		<Formik
			initialValues={formik.initialValues}
			validationSchema={validationSchema}
			onSubmit={(values, actions) => {
				createTaskAddExecutorForm(values.executor);
				actions.resetForm();
				console.log(values, 'val');
			}}
		>
			<Form>
				<Input name="executor" placeholder="Введите ФИО исполнителя" onChange={formik.handleChange} />
			</Form>
		</Formik>
	);
};
