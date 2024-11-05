import { TimeRangeWidget } from '@/primitives/TimeWidgetsPanel/TimeRangeWidget/TimeRangeWidget';
import React, { FC } from 'react';
import { PersonRoleCnstr } from '../PersonRoleCnstr/PersonRoleCnstr';

interface IPersonRoleTimeRangeCnstrProps {
	fullDate: { date: string; time: string };
	userRole: string;
	fio: string;
}

export const PersonRoleTimeRangeCnstr: FC<IPersonRoleTimeRangeCnstrProps> = ({ fullDate, userRole, fio }) => {
	return (
		<TimeRangeWidget fullDate={fullDate}>
			<PersonRoleCnstr userRole={userRole} fio={fio} />
		</TimeRangeWidget>
	);
};
