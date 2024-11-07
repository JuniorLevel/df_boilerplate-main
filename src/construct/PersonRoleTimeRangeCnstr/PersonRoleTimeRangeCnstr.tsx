import { TimeRangeWidgetCnstr } from '@/construct/TimeRangeWidgetCnstr/TimeRangeWidgetCnstr';
import React, { FC } from 'react';
import { PersonRoleCnstr } from '../PersonRoleCnstr/PersonRoleCnstr';

interface IPersonRoleTimeRangeCnstrProps {
	fullDate: { date: string; time: string };
	userRole: string;
	fio: string;
}

export const PersonRoleTimeRangeCnstr: FC<IPersonRoleTimeRangeCnstrProps> = ({ fullDate, userRole, fio }) => {
	return (
		<TimeRangeWidgetCnstr fullDate={fullDate}>
			<PersonRoleCnstr userRole={userRole} fio={fio} />
		</TimeRangeWidgetCnstr>
	);
};
