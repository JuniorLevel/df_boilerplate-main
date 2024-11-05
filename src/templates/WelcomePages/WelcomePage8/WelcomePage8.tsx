import React, { FC } from 'react';
import { welcomeButtons, authButtons } from './data';
import Image1 from '../pictures/Image1.jpg';
import { SingleImageBg } from '@/primitives/Welcome/SingleImageBg/SingleImageBg';
import { Welcome } from '@/primitives/Welcome/Welcome';
import { WelcomeAuthButtons } from '@/primitives/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { WelcomeButton } from '@/primitives/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';

export const WelcomePage8: FC = () => (
	<SingleImageBg imageUrl={Image1}>
		<Welcome buttons={welcomeButtons}>
			<WelcomeAuthButtons>
				<WelcomeButton title={authButtons[0].title} onClick={authButtons[0].onClick} />
				<WelcomeButton title={authButtons[1].title} onClick={authButtons[1].onClick} />
				<WelcomeButton title={authButtons[2].title} onClick={authButtons[2].onClick} />
				<WelcomeButton title={authButtons[3].title} onClick={authButtons[3].onClick} />
				<WelcomeButton title={authButtons[4].title} onClick={authButtons[4].onClick} />
				<WelcomeButton title={authButtons[5].title} onClick={authButtons[5].onClick} />
				<WelcomeButton title={authButtons[6].title} onClick={authButtons[6].onClick} />
				<WelcomeButton title={authButtons[7].title} onClick={authButtons[7].onClick} />
				<WelcomeButton title={authButtons[8].title} onClick={authButtons[8].onClick} />
				<WelcomeButton title={authButtons[9].title} onClick={authButtons[9].onClick} />
			</WelcomeAuthButtons>
		</Welcome>
	</SingleImageBg>
);
