import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { welcomeButtons, authButtons } from './data';
import image from '../pictures/Image1.jpg';
import { SingleImageBg } from '@/primitives/Welcome/SingleImageBg/SingleImageBg';
import { Welcome } from '@/primitives/Welcome/Welcome';
import { WelcomeAuthButtons } from '@/primitives/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { WelcomeButton } from '@/primitives/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';

export const WelcomePage5: FC = () => (
	<SingleImageBg imageUrl={image}>
		<Welcome buttons={welcomeButtons}>
			<MediaQuery minWidth={361}>
				<WelcomeAuthButtons>
					<WelcomeButton title={authButtons[0].title} onClick={authButtons[0].onClick} />
					<WelcomeButton title={authButtons[1].title} onClick={authButtons[1].onClick} />
				</WelcomeAuthButtons>
			</MediaQuery>
			<MediaQuery maxWidth={360}>
				<WelcomeAuthButtons>
					<WelcomeButton title={authButtons[0].title} onClick={authButtons[0].onClick} />
					<WelcomeButton title={authButtons[1].title} onClick={authButtons[1].onClick} />
				</WelcomeAuthButtons>
			</MediaQuery>
		</Welcome>
	</SingleImageBg>
);
