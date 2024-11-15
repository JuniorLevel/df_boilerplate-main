/* eslint-disable eslint-restrict-imports/restrict-imports */
import React from 'react';
import { Form, Input, SubmitButton } from 'formik-antd';
import { Formik, useFormik } from 'formik';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import { useStyles } from '../TasksForm.styles';
import { useCreateTask } from '../useCreateTask';

export const TaskWithDurationFormCnstr = () => {
	const formik = useFormik({
		initialValues: { taskTitle: '', durationEnd: '' },
		onSubmit: (values: any) => {
			alert(JSON.stringify(values));
		},
	});
	const { styles } = useStyles();
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
				<FlexPrmt wrap gap={10}>
					<Input className={styles.input} name="taskTitle" placeholder="Введите название задачи" onChange={formik.handleChange} />
					<Input className={styles.input} name="durationEnd" placeholder="Введите крайний срок выполнения задачи в формате '01.01.70-13:00:00'" onChange={formik.handleChange} />
					<SubmitButton loading={false}>Создать задачу</SubmitButton>
				</FlexPrmt>
			</Form>
		</Formik>
	);
};
