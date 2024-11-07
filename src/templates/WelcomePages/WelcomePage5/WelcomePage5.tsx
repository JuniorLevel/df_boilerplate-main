import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { welcomeButtons, authButtons } from './data';
import image from '../pictures/Image1.jpg';
import { SingleImageBgPrmt } from '@/primitives/WelcomePrmt/SingleImageBgPrmt/SingleImageBgPrmt';
import { WelcomePrmt } from '@/primitives/WelcomePrmt/WelcomePrmt';
import { WelcomeAuthButtonsPrmt } from '@/primitives/WelcomePrmt/WelcomeAuthButtonsPrmt/WelcomeAuthButtonsPrmt';
import { WelcomeButtonPrmt } from '@/primitives/WelcomePrmt/WelcomeAuthButtonsPrmt/WelcomeButtonPrmt/WelcomeButtonPrmt';
import { screenSMMin, screenSMMax } from '@/primitives/WelcomePrmt/WelcomePrmt.styles';

export const WelcomePage5: FC = () => (
	<SingleImageBgPrmt imageUrl={image}>
		<WelcomePrmt buttons={welcomeButtons}>
			<MediaQuery minWidth={screenSMMin}>
				<WelcomeAuthButtonsPrmt>
					<WelcomeButtonPrmt title={authButtons[0].title} onClick={authButtons[0].onClick} />
					<WelcomeButtonPrmt title={authButtons[1].title} onClick={authButtons[1].onClick} />
				</WelcomeAuthButtonsPrmt>
			</MediaQuery>
			<MediaQuery maxWidth={screenSMMax}>
				<WelcomeAuthButtonsPrmt>
					<WelcomeButtonPrmt title={authButtons[0].title} onClick={authButtons[0].onClick} />
					<WelcomeButtonPrmt title={authButtons[1].title} onClick={authButtons[1].onClick} />
				</WelcomeAuthButtonsPrmt>
			</MediaQuery>
		</WelcomePrmt>
	</SingleImageBgPrmt>
);
