/* eslint-disable eslint-restrict-imports/restrict-imports */
import React from 'react';
import { Form, Input } from 'formik-antd';
import { Formik, useFormik } from 'formik';
import { useCreateTask } from '../useCreateTask';
import * as Yup from 'yup';

export const TaskUploadFileForm = () => {
	const formik = useFormik({
		initialValues: { fileName: '' },
		onSubmit: (values) => {
			alert(JSON.stringify(values));
		},
	});
	const validationSchema = Yup.object({
		fileName: Yup.string().required('Required'),
	});
	const { createTaskUploadFileForm } = useCreateTask();

	return (
		<Formik
			initialValues={formik.initialValues}
			validationSchema={validationSchema}
			onSubmit={(values, actions) => {
				createTaskUploadFileForm(values.fileName);
				actions.resetForm();
				console.log(values, 'val');
			}}
		>
			<Form>
				<Input name="fileName" placeholder="Загрузить файл" onChange={formik.handleChange} />
			</Form>
		</Formik>
	);
};
