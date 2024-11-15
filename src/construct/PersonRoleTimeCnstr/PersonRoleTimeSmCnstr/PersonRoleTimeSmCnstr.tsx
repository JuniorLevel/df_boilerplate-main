import MediaQuery from 'react-responsive';
import React, { FC } from 'react';
import { CustomClockPrmt } from '../../../primitives/CustomClockPrmt/CustomClockPrmt';
import { WeeksAndYearsPanelPrmt } from '../../../primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { useStyles, screenMDMax } from './PersonRoleTimeSmCnstr.styles';
import { PersonRoleCnstr } from '@/construct/PersonRoleCnstr/PersonRoleCnstr';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';

interface IPersonRoleTimeSmCnstrProps {
	durationStart?: string;
	userRole: string;
	fio: string;
}

export const PersonRoleTimeSmCnstr: FC<IPersonRoleTimeSmCnstrProps> = ({ durationStart, userRole, fio }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenMDMax}>
			<FlexPrmt gap={10} align="center" vertical className={styles.container}>
				<div className={styles.selectAndPerson}>
					<PersonRoleCnstr userRole={userRole} fio={fio} />
				</div>
				<DateWithTimeBlockPrmt durationTime={durationStart} />
				<FlexPrmt gap={10} vertical align="center">
					<WeeksAndYearsPanelPrmt />
					<CustomClockPrmt type="circle" strokeWidth={10} percent={60} size={60} showInfo={false} />
				</FlexPrmt>
			</FlexPrmt>
		</MediaQuery>
	);
};
