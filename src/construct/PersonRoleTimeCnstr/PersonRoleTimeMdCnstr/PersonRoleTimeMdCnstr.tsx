import MediaQuery from 'react-responsive';
import React, { FC } from 'react';
import { Flex } from 'antd';
import { TimeWidgetsCustomClock } from '../../../primitives/TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../../primitives/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../../primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { useStyles, screenMDMin, screenXLMax } from './PersonRoleTimeMdCnstr.styles';
import { PersonRoleCnstr } from '@/construct/PersonRoleCnstr/PersonRoleCnstr';

interface IPersonRoleTimeMdCnstrProps {
	fullDate: { date: string; time: string };
	userRole: string;
	fio: string;
}

export const PersonRoleTimeMdCnstr: FC<IPersonRoleTimeMdCnstrProps> = ({ fullDate, userRole, fio }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenMDMin} maxWidth={screenXLMax}>
			{/* <Flex vertical wrap align="center" gap={10} className={styles.container} justify="center">
				<div className={styles.selectAndPerson}>
					<PersonRoleCnstr userRole={userRole} fio={fio} />
				</div>
				<Flex align="center" gap={10}>
					<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
					<Flex gap={10} align="center">
						<TimeWidgetsWeeksAndYearsPanel />
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
			</Flex> */}
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
