/* eslint-disable eslint-restrict-imports/restrict-imports */
import React from 'react';
import { Form, Input } from 'formik-antd';
import { Formik, useFormik } from 'formik';
import { useStyles } from '../TasksForm.styles';
import { useCreateTask } from '../useCreateTask';

export const TaskUploadFileFormCnstr = () => {
	const formik = useFormik({
		initialValues: { fileName: '' },
		onSubmit: (values: any) => {
			alert(JSON.stringify(values));
		},
	});
	const { styles } = useStyles();
	const { createTaskUploadFileForm } = useCreateTask();

	return (
		<Formik
			initialValues={formik.initialValues}
			onSubmit={(values) => {
				createTaskUploadFileForm(values.fileName);
				console.log(values, 'val');
			}}
		>
			<Form>
				<Input className={styles.input} name="fileName" placeholder="Загрузить файл" onChange={formik.handleChange} />
			</Form>
		</Formik>
	);
};
