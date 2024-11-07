import React, { FC } from 'react';
import { welcomeButtons, authButtons, images } from './data';
import { FourImagesBgPrmt } from '@/primitives/WelcomePrmt/FourImagesBgPrmt/FourImagesBgPrmt';
import { WelcomePrmt } from '@/primitives/WelcomePrmt/WelcomePrmt';
import { WelcomeAuthButtonsPrmt } from '@/primitives/WelcomePrmt/WelcomeAuthButtonsPrmt/WelcomeAuthButtonsPrmt';
import { WelcomeButtonPrmt } from '@/primitives/WelcomePrmt/WelcomeAuthButtonsPrmt/WelcomeButtonPrmt/WelcomeButtonPrmt';

export const WelcomePage1: FC = () => (
	<FourImagesBgPrmt imagesUrls={images}>
		<WelcomePrmt buttons={welcomeButtons}>
			<WelcomeAuthButtonsPrmt>
				<WelcomeButtonPrmt title={authButtons[0].title} onClick={authButtons[0].onClick} />
				<WelcomeButtonPrmt title={authButtons[1].title} onClick={authButtons[1].onClick} />
			</WelcomeAuthButtonsPrmt>
		</WelcomePrmt>
	</FourImagesBgPrmt>
);
