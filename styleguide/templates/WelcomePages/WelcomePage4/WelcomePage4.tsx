import React, { FC } from 'react';
import { welcomeButtons, authButtons, images } from './data';
import { FourImagesBgPrmt } from '@/primitives/WelcomePrmt/FourImagesBgPrmt/FourImagesBgPrmt';
import { WelcomePrmt } from '@/primitives/WelcomePrmt/WelcomePrmt';
import { WelcomeAuthButtonsPrmt } from '@/primitives/WelcomePrmt/WelcomeAuthButtonsPrmt/WelcomeAuthButtonsPrmt';
import { WelcomeButtonPrmt } from '@/primitives/WelcomePrmt/WelcomeAuthButtonsPrmt/WelcomeButtonPrmt/WelcomeButtonPrmt';

export const WelcomePage4: FC = () => (
	<FourImagesBgPrmt imagesUrls={images}>
		<WelcomePrmt buttons={welcomeButtons}>
			<WelcomeAuthButtonsPrmt>
				<WelcomeButtonPrmt title={authButtons[0].title} onClick={authButtons[0].onClick} />
				<WelcomeButtonPrmt title={authButtons[1].title} onClick={authButtons[1].onClick} />
				<WelcomeButtonPrmt title={authButtons[2].title} onClick={authButtons[2].onClick} />
				<WelcomeButtonPrmt title={authButtons[3].title} onClick={authButtons[3].onClick} />
				<WelcomeButtonPrmt title={authButtons[4].title} onClick={authButtons[4].onClick} />
				<WelcomeButtonPrmt title={authButtons[5].title} onClick={authButtons[5].onClick} />
				<WelcomeButtonPrmt title={authButtons[6].title} onClick={authButtons[6].onClick} />
				<WelcomeButtonPrmt title={authButtons[7].title} onClick={authButtons[7].onClick} />
				<WelcomeButtonPrmt title={authButtons[8].title} onClick={authButtons[8].onClick} />
				<WelcomeButtonPrmt title={authButtons[9].title} onClick={authButtons[9].onClick} />
			</WelcomeAuthButtonsPrmt>
		</WelcomePrmt>
	</FourImagesBgPrmt>
);
