import React, { FC, useEffect, useRef, useState } from 'react';
import { Layout } from 'antd';
import MediaQuery from 'react-responsive';
import { useStyles, screenSMMin } from '../LayoutPrmt.styles';
import { HomeSidebarNavigationPrmt } from './HomeSidebarNavigationPrmt/HomeSidebarNavigationPrmt';

interface IHomeSidebarPrmtProps {
	buttons: any[];
}

export const HomeSidebarPrmt: FC<IHomeSidebarPrmtProps> = ({ buttons }) => {
	const [isCollapsedSidebar, setIsCollapsedSidebar] = useState(true);
	const sidebarRef = useRef<HTMLDivElement | null>(null);

	const handleMouseOver = () => {
		setIsCollapsedSidebar(false);
	};

	const handleMouseLeave = () => {
		setIsCollapsedSidebar(true);
	};

	useEffect(() => {
		const sidebarElement = sidebarRef.current;
		if (sidebarElement) {
			sidebarElement.addEventListener('mouseover', handleMouseOver);
			sidebarElement.addEventListener('mouseleave', handleMouseLeave);
			return () => {
				sidebarElement.removeEventListener('mouseover', handleMouseOver);
				sidebarElement.removeEventListener('mouseleave', handleMouseLeave);
			};
		}
	}, []);

	const { Sider } = Layout;
	const { styles } = useStyles();

	return (
		<MediaQuery minWidth={screenSMMin}>
			<Sider className={styles.sidebar} width={isCollapsedSidebar ? 65 : 200} ref={sidebarRef}>
				<HomeSidebarNavigationPrmt buttons={buttons} isCollapsedSidebar={isCollapsedSidebar} />
			</Sider>
		</MediaQuery>
	);
};
