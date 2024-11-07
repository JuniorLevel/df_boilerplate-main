import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { useStyles, screenSMMin } from './SingleImageBgPrmt.styles';

interface ISingleImageBgPrmtProps {
	imageUrl: string;
	children: React.ReactNode;
}

export const SingleImageBgPrmt: FC<ISingleImageBgPrmtProps> = ({ children, imageUrl }) => {
	const { styles } = useStyles();

	return (
		<div className={styles.image}>
			<MediaQuery minWidth={screenSMMin}>
				<img src={imageUrl} alt="background" />
			</MediaQuery>
			{children}
		</div>
	);
};
