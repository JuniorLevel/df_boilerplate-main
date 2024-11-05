import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { Flex } from 'antd';
// import { PersonRoleTimeLgCnstr } from './PersonRoleTimeLgCnstr/PersonRoleTimeLgCnstr';
import { PersonRoleTimeMdCnstr } from './PersonRoleTimeMdCnstr/PersonRoleTimeMdCnstr';
import { PersonRoleTimeSmCnstr } from './PersonRoleTimeSmCnstr/PersonRoleTimeSmCnstr';
import { TimeWidgetsCustomClock } from '../../primitives/TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../primitives/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { useStyles, screenXLMin } from './PersonRoleTimeCnstr.styles';
import { PersonRoleCnstr } from '@/construct/PersonRoleCnstr/PersonRoleCnstr';

interface IPersonRoleTimeCnstrProps {
	fullDate: { date: string; time: string };
	userRole: string;
	fio: string;
}

export const PersonRoleTimeCnstr: FC<IPersonRoleTimeCnstrProps> = ({ fullDate, userRole, fio }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenXLMin}>
				<Flex gap={10} align="center" className={styles.container}>
					<div className={styles.selectAndPerson}>
						<PersonRoleCnstr userRole={userRole} fio={fio} />
					</div>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					<Flex gap={10} align="center">
						<TimeWidgetsWeeksAndYearsPanel />
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
			</MediaQuery>
			{/* <PersonRoleTimeLgCnstr fullDate={fullDate} userRole={userRole} fio={fio} /> */}
			<PersonRoleTimeMdCnstr fullDate={fullDate} userRole={userRole} fio={fio} />
			<PersonRoleTimeSmCnstr fullDate={fullDate} userRole={userRole} fio={fio} />
		</>
	);
};
