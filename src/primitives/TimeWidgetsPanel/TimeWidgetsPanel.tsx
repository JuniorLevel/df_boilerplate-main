import React, { FC } from 'react';
import { useStyles } from './TimeWidgetsPanel.styles';
import { PersonRoleCnstr } from '@/construct/PersonRoleCnstr/PersonRoleCnstr';
import { TextRangeTimeCnstr } from '@/construct/TextRangeTimeCnstr/TextRangeTimeCnstr';
import { TextTime2Cnstr } from '@/construct/TextTime2Cnstr/TextTime2Cnstr';
import { TextTime1Cnstr } from '@/construct/TextTime1Cnstr/TextTime1Cnstr';
import { RangeTime4Prmt } from '@/primitives/RangeTime4Prmt/RangeTime4Prmt';
import { RangeTime3LgPrmt } from '@/primitives/RangeTime3Prmt/RangeTime3LgPrmt/RangeTime3LgPrmt';
import { RangeTime2Prmt } from '@/primitives/RangeTime2Prmt/RangeTime2Prmt';
import { Time1Prmt } from '@/primitives/Time1Prmt/Time1Prmt';
import { Time2Prmt } from '@/primitives/Time2Prmt/Time2Prmt';
import { RangeTime1Prmt } from '@/primitives/RangeTime1Prmt/RangeTime1Prmt';
import { RangeTime3Prmt } from '@/primitives/RangeTime3Prmt/RangeTime3Prmt';
import { TextPrmt } from '@/primitives/TextPrmt/TextPrmt';
import { PersonRoleTimeRangeCnstr } from '@/construct/PersonRoleTimeRangeCnstr/PersonRoleTimeRangeCnstr';
import { PersonRoleTimeCnstr } from '@/construct/PersonRoleTimeCnstr/PersonRoleTimeCnstr';

export const TimeWidgetsPanel: FC = () => {
	const { styles } = useStyles();

	return (
		<div className={styles.panel}>
			<Time1Prmt date="13 августа 1999" />
			<Time2Prmt fullDate={{ date: '13.08.99', time: '20:55:55' }} />
			<RangeTime3LgPrmt fullDate={{ date: '13.08.99', time: '20:55:55' }} />
			<RangeTime1Prmt fullDate={{ date: '13.08.99', time: '20:55:55' }} />
			<RangeTime2Prmt fullDate={{ date: '13.08.99', time: '20:55:55' }} />
			<RangeTime3Prmt fullDate={{ date: '13.08.99', time: '20:55:55' }} />
			<RangeTime4Prmt fullDate={{ date: '13.08.99', time: '20:55:55' }} />
			<div>
				<TextPrmt text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
			</div>
			<TextTime1Cnstr
				text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf"
				fullDate={{ date: '13.08.99', time: '20:55:55' }}
			/>
			<TextTime2Cnstr
				text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf"
				fullDate={{ date: '13.08.99', time: '20:55:55' }}
			/>
			<TextRangeTimeCnstr
				text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf"
				fullDate={{ date: '13.08.99', time: '20:55:55' }}
			/>
			<PersonRoleCnstr userRole="Assigned" fio="FIO FIO FIO FIO" />
			<PersonRoleTimeCnstr fullDate={{ date: '13.08.99', time: '20:55:55' }} userRole="Assigned" fio="FIO FIO FIO FIO" />
			<PersonRoleTimeRangeCnstr fullDate={{ date: '13.08.99', time: '20:55:55' }} userRole="Assigned" fio="FIO FIO FIO FIO" />
		</div>
	);
};
