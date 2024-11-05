import { Flex } from 'antd';
import MediaQuery from 'react-responsive';
import React, { FC } from 'react';
import { TimeWidgetsCustomClock } from '../../../primitives/TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../../primitives/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../../primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { useStyles, screenMDMax, screenXLMax } from './PersonRoleTimeLgCnstr.styles';
import { PersonRoleCnstr } from '@/construct/PersonRoleCnstr/PersonRoleCnstr';

interface IPersonRoleTimeLgCnstrProps {
	fullDate: { date: string; time: string };
	userRole: string;
	fio: string;
}

export const PersonRoleTimeLgCnstr: FC<IPersonRoleTimeLgCnstrProps> = ({ fullDate, userRole, fio }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenMDMax} maxWidth={screenXLMax}>
			<Flex wrap gap={10} align="center" justify="center" className={styles.container}>
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
	);
};
