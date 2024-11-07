import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { useStyles, screenSMMin } from './PersonRoleCnstr.styles';
import { PersonRoleMdCnstr } from './PersonRoleMdCnstr/PersonRoleMdCnstr';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import { TextTypographyPrmt } from '@/primitives/TextTypographyPrmt/TextTypographyPrmt';
import { AvatarPrmt } from '@/primitives/AvatarPrmt/AvatarPrmt';

interface IPersonRoleCnstrProps {
	userRole: string;
	fio: string;
}

export const PersonRoleCnstr: FC<IPersonRoleCnstrProps> = ({ userRole, fio }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenSMMin}>
				<FlexPrmt wrap align="center" gap={10} className={styles.container}>
					<FlexPrmt className={styles.content}>
						<TextTypographyPrmt>{userRole}</TextTypographyPrmt>
						<TextTypographyPrmt className={styles.role}>role</TextTypographyPrmt>
					</FlexPrmt>
					<FlexPrmt className={styles.avatar} align="center" gap={10}>
						<AvatarPrmt className={styles.avatarItem}>FIO</AvatarPrmt>
						<TextTypographyPrmt>{fio}</TextTypographyPrmt>
					</FlexPrmt>
				</FlexPrmt>
			</MediaQuery>
			<PersonRoleMdCnstr userRole={userRole} fio={fio} />
		</>
	);
};
