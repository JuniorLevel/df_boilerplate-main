/* eslint-disable eslint-restrict-imports/restrict-imports */
import React from 'react';
import { Form, Input } from 'formik-antd';
import { Formik, useFormik } from 'formik';
import { useCreateTask } from '../useCreateTask';

export const TaskUploadFileForm = () => {
	const formik = useFormik({
		initialValues: { fileName: '' },
		onSubmit: (values: any) => {
			alert(JSON.stringify(values));
		},
	});
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
				<Input name="fileName" placeholder="Загрузить файл" onChange={formik.handleChange} />
			</Form>
		</Formik>
	);
};
