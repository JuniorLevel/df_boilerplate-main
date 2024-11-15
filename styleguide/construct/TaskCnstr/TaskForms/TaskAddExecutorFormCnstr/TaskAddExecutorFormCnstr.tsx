/* eslint-disable eslint-restrict-imports/restrict-imports */
import React from 'react';
import { Form, Input } from 'formik-antd';
import { Formik, useFormik } from 'formik';
import { useStyles } from '../TasksForm.styles';
import { useCreateTask } from '../useCreateTask';

export const TaskAddExecutorFormCnstr = () => {
	const formik = useFormik({
		initialValues: { executor: '' },
		onSubmit: (values: any) => {
			alert(JSON.stringify(values));
		},
	});
	const { styles } = useStyles();
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
				<Input className={styles.input} name="executor" placeholder="Введите ФИО исполнителя" onChange={formik.handleChange} />
			</Form>
		</Formik>
	);
};
