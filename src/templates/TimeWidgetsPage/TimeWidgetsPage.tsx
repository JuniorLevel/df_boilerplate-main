import React, { FC } from 'react';
import { sidebarButtons } from './data';
import { LayoutPrmt } from '@/primitives/LayoutPrmt/LayoutPrmt';
import { Time1Prmt } from '@/primitives/Time1Prmt/Time1Prmt';
import { Time2Prmt } from '@/primitives/Time2Prmt/Time2Prmt';
import { RangeTime1Prmt } from '@/primitives/RangeTime1Prmt/RangeTime1Prmt';
import { RangeTime2Prmt } from '@/primitives/RangeTime2Prmt/RangeTime2Prmt';
import { RangeTime3Prmt } from '@/primitives/RangeTime3Prmt/RangeTime3Prmt';
import { RangeTime4Prmt } from '@/primitives/RangeTime4Prmt/RangeTime4Prmt';
import { TextPrmt } from '@/primitives/TextPrmt/TextPrmt';
import { TextTime1Cnstr } from '@/construct/TextTime1Cnstr/TextTime1Cnstr';
import { TextTime2Cnstr } from '@/construct/TextTime2Cnstr/TextTime2Cnstr';
import { TextRangeTimeCnstr } from '@/construct/TextRangeTimeCnstr/TextRangeTimeCnstr';
import { PersonRoleCnstr } from '@/construct/PersonRoleCnstr/PersonRoleCnstr';
import { PersonRoleTimeCnstr } from '@/construct/PersonRoleTimeCnstr/PersonRoleTimeCnstr';
import { PersonRoleTimeRangeCnstr } from '@/construct/PersonRoleTimeRangeCnstr/PersonRoleTimeRangeCnstr';

export const TimeWidgetsPage: FC = () => (
	<LayoutPrmt buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
		<Time1Prmt date="13 августа 1999" />
		<Time2Prmt fullDate={{ date: '13.08.99', time: '20:55:55' }} />
		<RangeTime1Prmt fullDate={{ date: '13.08.99', time: '20:55:55' }} />
		<RangeTime2Prmt fullDate={{ date: '13.08.99', time: '20:55:55' }} />
		<RangeTime3Prmt fullDate={{ date: '13.08.99', time: '20:55:55' }} />
		<RangeTime4Prmt fullDate={{ date: '13.08.99', time: '20:55:55' }} />
		<TextPrmt text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
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
	</LayoutPrmt>
);
