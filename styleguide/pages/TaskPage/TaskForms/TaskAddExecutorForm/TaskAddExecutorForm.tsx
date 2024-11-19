/* eslint-disable eslint-restrict-imports/restrict-imports */
import React from 'react';
import { useCreateTask } from '../useCreateTask';
import { Formik, useFormik } from 'formik';
import { Form, Input } from 'formik-antd';

export const TaskAddExecutorForm = () => {
	const formik = useFormik({
		initialValues: { executor: '' },
		onSubmit: (values: any) => {
			alert(JSON.stringify(values));
		},
	});
	const { createTaskAddExecutorForm } = useCreateTask();

	return (
		<Formik
			initialValues={formik.initialValues}
			onSubmit={(values) => {
				createTaskAddExecutorForm(values.executor);
				console.log(values, 'val');
			}}
		>
			<Form>
				<Input name="executor" placeholder="Введите ФИО исполнителя" onChange={formik.handleChange} />
			</Form>
		</Formik>
	);
};
