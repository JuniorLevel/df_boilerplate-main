import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { useStyles, screenSMMin } from './FourImagesBgPrmt.styles';

interface IFourImagesBgPrmtProps {
	imagesUrls: { id: number; url: string }[];
	children: React.ReactNode;
}

export const FourImagesBgPrmt: FC<IFourImagesBgPrmtProps> = ({ children, imagesUrls }) => {
	const { styles } = useStyles();

	return (
		<div className={styles.image}>
			<MediaQuery minWidth={screenSMMin}>{imagesUrls?.map((image) => <img key={image.id} src={image.url} alt={`background-${image.id}`} />)}</MediaQuery>
			{children}
		</div>
	);
};
