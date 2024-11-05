import React, { FC } from 'react';
import { welcomeButtons, authButtons, images } from './data';
import { FourImagesBg } from '@/primitives/Welcome/FourImagesBg/FourImagesBg';
import { Welcome } from '@/primitives/Welcome/Welcome';
import { WelcomeAuthButtons } from '@/primitives/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { WelcomeButton } from '@/primitives/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';

export const WelcomePage1: FC = () => (
	<FourImagesBg imagesUrls={images}>
		<Welcome buttons={welcomeButtons}>
			<WelcomeAuthButtons>
				<WelcomeButton title={authButtons[0].title} onClick={authButtons[0].onClick} />
				<WelcomeButton title={authButtons[1].title} onClick={authButtons[1].onClick} />
			</WelcomeAuthButtons>
		</Welcome>
	</FourImagesBg>
);
