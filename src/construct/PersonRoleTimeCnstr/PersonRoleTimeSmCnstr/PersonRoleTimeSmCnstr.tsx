import MediaQuery from 'react-responsive';
import React, { FC } from 'react';
import { Flex } from 'antd';
import { TimeWidgetsCustomClock } from '../../../primitives/TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsWeeksAndYearsPanel } from '../../../primitives/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsDateWithTimeBlock } from '../../../primitives/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { useStyles, screenMDMax } from './PersonRoleTimeSmCnstr.styles';
import { PersonRoleCnstr } from '@/construct/PersonRoleCnstr/PersonRoleCnstr';

interface IPersonRoleTimeSmCnstrProps {
	fullDate: { date: string; time: string };
	userRole: string;
	fio: string;
}

export const PersonRoleTimeSmCnstr: FC<IPersonRoleTimeSmCnstrProps> = ({ fullDate, userRole, fio }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenMDMax}>
			<Flex gap={10} align="center" vertical className={styles.container}>
				<div className={styles.selectAndPerson}>
					<PersonRoleCnstr userRole={userRole} fio={fio} />
				</div>
				<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
				<Flex gap={10} vertical align="center">
					<TimeWidgetsWeeksAndYearsPanel />
					<TimeWidgetsCustomClock />
				</Flex>
			</Flex>
			{/* <Flex wrap align="center" gap={10} className={styles.container} justify="center">
				<div className={styles.selectAndPerson}>
					<PersonRoleCnstr userRole={userRole} fio={fio} />
				</div>
				<Flex vertical gap={10}>
					<Flex vertical align="center" gap={10}>
						<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
						<TimeWidgetsCustomClock />
					</Flex>
					<Flex vertical align="center" gap={10}>
						<TimeWidgetsDateWithTimeBlock fullDate={fullDate} />
						<TimeWidgetsCustomClock />
					</Flex>
					<Flex justify="center">
						<TimeWidgetsWeeksAndYearsPanel />
					</Flex>
				</Flex>
			</Flex> */}
		</MediaQuery>
	);
};
