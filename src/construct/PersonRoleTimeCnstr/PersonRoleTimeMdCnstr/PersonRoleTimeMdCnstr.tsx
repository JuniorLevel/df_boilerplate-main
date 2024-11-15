import MediaQuery from 'react-responsive';
import React, { FC } from 'react';
import { CustomClockPrmt } from '../../../primitives/CustomClockPrmt/CustomClockPrmt';
import { WeeksAndYearsPanelPrmt } from '../../../primitives/WeeksAndYearsPanelPrmt/WeeksAndYearsPanelPrmt';
import { useStyles, screenMDMin, screenXLMax } from './PersonRoleTimeMdCnstr.styles';
import { PersonRoleCnstr } from '@/construct/PersonRoleCnstr/PersonRoleCnstr';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import { DateWithTimeBlockPrmt } from '@/primitives/DateWithTimeBlockPrmt/DateWithTimeBlockPrmt';

interface IPersonRoleTimeMdCnstrProps {
	durationStart?: string;
	userRole: string;
	fio: string;
}

export const PersonRoleTimeMdCnstr: FC<IPersonRoleTimeMdCnstrProps> = ({ durationStart, userRole, fio }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenMDMin} maxWidth={screenXLMax}>
			<FlexPrmt wrap gap={10} align="center" justify="center" className={styles.container}>
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
	);
};
