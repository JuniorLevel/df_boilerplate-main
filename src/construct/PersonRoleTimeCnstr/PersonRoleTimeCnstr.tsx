import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { CustomClockPrmt } from '../../primitives/CustomClockPrmt/CustomClockPrmt';
import { WeeksAndYearsPanelPrmt } from '../../primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { useStyles, screenXLMin } from './PersonRoleTimeCnstr.styles';
import { PersonRoleCnstr } from '@/construct/PersonRoleCnstr/PersonRoleCnstr';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { PersonRoleTimeMdCnstr } from './PersonRoleTimeMdCnstr/PersonRoleTimeMdCnstr';
import { PersonRoleTimeSmCnstr } from './PersonRoleTimeSmCnstr/PersonRoleTimeSmCnstr';

interface IPersonRoleTimeCnstrProps {
	durationStart?: string;
	userRole: string;
	fio: string;
}

export const PersonRoleTimeCnstr: FC<IPersonRoleTimeCnstrProps> = ({ durationStart, userRole, fio }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenXLMin}>
				<FlexPrmt gap={10} align="center" className={styles.container}>
					<div className={styles.selectAndPerson}>
						<PersonRoleCnstr userRole={userRole} fio={fio} />
					</div>
					<DateWithTimeBlockPrmt durationTime={durationStart} />
					<FlexPrmt gap={10} align="center">
						<WeeksAndYearsPanelPrmt />
						<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
					</FlexPrmt>
				</FlexPrmt>
			</MediaQuery>
			<PersonRoleTimeMdCnstr durationStart={durationStart} userRole={userRole} fio={fio} />
			<PersonRoleTimeSmCnstr durationStart={durationStart} userRole={userRole} fio={fio} />
		</>
	);
};
