import React, { FC } from 'react';
import { useStyles, screenSMMax } from './PersonRoleMdCnstr.styles';
import MediaQuery from 'react-responsive';
import { FlexPrmt } from '@/primitives/FlexPrmt/FlexPrmt';
import { AvatarPrmt } from '@/primitives/AvatarPrmt/AvatarPrmt';
import { TextTypographyPrmt } from '@/primitives/TextTypographyPrmt/TextTypographyPrmt';

interface IPersonRoleMdCnstrProps {
	userRole: string;
	fio: string;
}

export const PersonRoleMdCnstr: FC<IPersonRoleMdCnstrProps> = ({ userRole, fio }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenSMMax}>
			<FlexPrmt vertical align="center" gap={10} className={styles.container}>
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
	);
};
