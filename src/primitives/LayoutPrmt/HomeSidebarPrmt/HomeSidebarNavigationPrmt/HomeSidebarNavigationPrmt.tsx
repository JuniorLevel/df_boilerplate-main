import React, { FC } from 'react';
import { Button, Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { useStyles, screenSMMin } from '../../LayoutPrmt.styles';

interface IHomeSidebarNavigationPrmtProps {
	isCollapsedSidebar?: boolean;
	buttons: any[];
}

export const HomeSidebarNavigationPrmt: FC<IHomeSidebarNavigationPrmtProps> = ({ isCollapsedSidebar, buttons }) => {
	const { styles } = useStyles();

	return (
		<nav>
			{buttons.map((button) => (
				<Flex className={styles.sidebarNavigation} key={button.id}>
					<Button type="link" onClick={button.onClick}>
						<MediaQuery minWidth={screenSMMin}>{!isCollapsedSidebar && <span>{button.title}</span>}</MediaQuery>
					</Button>
				</Flex>
			))}
		</nav>
	);
};
