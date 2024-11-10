import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { PersonRoleTimeMdCnstr } from './PersonRoleTimeMdCnstr/PersonRoleTimeMdCnstr';
import { PersonRoleTimeSmCnstr } from './PersonRoleTimeSmCnstr/PersonRoleTimeSmCnstr';
import { CustomClockPrmt } from '../../primitives/CustomClockPrmt/CustomClockPrmt';
import { WeeksAndYearsPanelPrmt } from '../../primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { DateWithTimeBlockPrmt } from '../../primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { useStyles, screenXLMin } from './PersonRoleTimeCnstr.styles';
import { PersonRoleCnstr } from '@/construct/PersonRoleCnstr/PersonRoleCnstr';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';

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
				<FlexPrmt gap={10} align="center" className={styles.container}>
					<div className={styles.selectAndPerson}>
						<PersonRoleCnstr userRole={userRole} fio={fio} />
					</div>
					<DateWithTimeBlockPrmt fullDate={fullDate} />
					<FlexPrmt gap={10} align="center">
						<WeeksAndYearsPanelPrmt />
						<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
					</FlexPrmt>
				</FlexPrmt>
			</MediaQuery>
			<PersonRoleTimeMdCnstr fullDate={fullDate} userRole={userRole} fio={fio} />
			<PersonRoleTimeSmCnstr fullDate={fullDate} userRole={userRole} fio={fio} />
		</>
	);
};
