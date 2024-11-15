import { TimeRangeWidgetCnstr } from '@/construct/TimeRangeWidgetCnstr/TimeRangeWidgetCnstr';
import React, { FC } from 'react';
import { PersonRoleCnstr } from '../PersonRoleCnstr/PersonRoleCnstr';
import { IDuration } from '../TaskCnstr/interfaces/interfaces';

interface IPersonRoleTimeRangeCnstrProps {
	duration: IDuration;
	userRole: string;
	fio: string;
}

export const PersonRoleTimeRangeCnstr: FC<IPersonRoleTimeRangeCnstrProps> = ({ duration, userRole, fio }) => {
	return (
		<TimeRangeWidgetCnstr duration={duration}>
			<PersonRoleCnstr userRole={userRole} fio={fio} />
		</TimeRangeWidgetCnstr>
	);
};
