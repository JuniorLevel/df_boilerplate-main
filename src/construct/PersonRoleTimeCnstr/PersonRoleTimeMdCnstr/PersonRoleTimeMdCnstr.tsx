import MediaQuery from 'react-responsive';
import React, { FC } from 'react';
import { CustomClockPrmt } from '../../../primitives/CustomClockPrmt/CustomClockPrmt';
import { WeeksAndYearsPanelPrmt } from '../../../primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { DateWithTimeBlockPrmt } from '../../../primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';
import { useStyles, screenMDMin, screenXLMax } from './PersonRoleTimeMdCnstr.styles';
import { PersonRoleCnstr } from '@/construct/PersonRoleCnstr/PersonRoleCnstr';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';

interface IPersonRoleTimeMdCnstrProps {
	fullDate: { date: string; time: string };
	userRole: string;
	fio: string;
}

export const PersonRoleTimeMdCnstr: FC<IPersonRoleTimeMdCnstrProps> = ({ fullDate, userRole, fio }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenMDMin} maxWidth={screenXLMax}>
			<FlexPrmt wrap gap={10} align="center" justify="center" className={styles.container}>
				<div className={styles.selectAndPerson}>
					<PersonRoleCnstr userRole={userRole} fio={fio} />
				</div>
				<DateWithTimeBlockPrmt fullDate={fullDate} />
				<FlexPrmt gap={10} align="center">
					<WeeksAndYearsPanelPrmt />
					<CustomClockPrmt />
				</FlexPrmt>
			</FlexPrmt>
		</MediaQuery>
	);
};
