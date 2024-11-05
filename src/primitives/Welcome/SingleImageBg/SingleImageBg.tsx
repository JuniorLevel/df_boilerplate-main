import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { useStyles } from './singleImageBg.styles';

interface IFourImagesBgProps {
	imageUrl: string;
	children: React.ReactNode;
}

export const SingleImageBg: FC<IFourImagesBgProps> = ({ children, imageUrl }) => {
	const { styles } = useStyles();

	return (
		<div className={styles.image}>
			<MediaQuery minWidth={361}>
				<img src={imageUrl} alt="background" />
			</MediaQuery>
			{children}
		</div>
	);
};
