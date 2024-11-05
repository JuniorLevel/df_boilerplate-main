import React, { FC } from 'react';
import { Button, Flex } from 'antd';
import MediaQuery from 'react-responsive';
import { useStyles } from '../../layout.styles';

interface IHomeSidebarNavigationProps {
	isCollapsedSidebar?: boolean;
	buttons: any[];
}

export const HomeSidebarNavigation: FC<IHomeSidebarNavigationProps> = ({ isCollapsedSidebar, buttons }) => {
	const { styles } = useStyles();

	return (
		<nav>
			{buttons.map((button) => (
				<Flex className={styles.sidebarNavigation} key={button.id}>
					<Button type="link" onClick={button.onClick}>
						<MediaQuery minWidth={361}>{!isCollapsedSidebar && <span>{button.title}</span>}</MediaQuery>
					</Button>
				</Flex>
			))}
		</nav>
	);
};
