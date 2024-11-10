import MediaQuery from 'react-responsive';
import React, { FC } from 'react';
import { CustomClockPrmt } from '../../../primitives/CustomClockPrmt/CustomClockPrmt';
import { WeeksAndYearsPanelPrmt } from '../../../primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { DateWithTimeBlockPrmt } from '../../../primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { useStyles, screenMDMax } from './PersonRoleTimeSmCnstr.styles';
import { PersonRoleCnstr } from '@/construct/PersonRoleCnstr/PersonRoleCnstr';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';

interface IPersonRoleTimeSmCnstrProps {
	fullDate: { date: string; time: string };
	userRole: string;
	fio: string;
}

export const PersonRoleTimeSmCnstr: FC<IPersonRoleTimeSmCnstrProps> = ({ fullDate, userRole, fio }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenMDMax}>
			<FlexPrmt gap={10} align="center" vertical className={styles.container}>
				<div className={styles.selectAndPerson}>
					<PersonRoleCnstr userRole={userRole} fio={fio} />
				</div>
				<DateWithTimeBlockPrmt fullDate={fullDate} />
				<FlexPrmt gap={10} vertical align="center">
					<WeeksAndYearsPanelPrmt />
					<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
				</FlexPrmt>
			</FlexPrmt>
		</MediaQuery>
	);
};
