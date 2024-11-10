import React, { FC, ReactNode, useContext, useEffect } from 'react';
import { Layout as HomeLayoutPrmt } from 'antd';
import { HomeHeaderPrmt } from './HomeHeaderPrmt/HomeHeaderPrmt';
import { HomeSidebarPrmt } from './HomeSidebarPrmt/HomeSidebarPrmt';
import { useStyles } from './LayoutPrmt.styles';
import { ThemeContextPrmt } from '../ThemeWrapperPrmt/ThemeContextPrmt';

interface ILayoutPrmtProps {
	children: ReactNode;
	buttons: any[];
	title: string;
	theme?: string;
	avatar: { title: string };
	footer?: ReactNode;
}

export const LayoutPrmt: FC<ILayoutPrmtProps> = ({ children, buttons, title, theme, avatar, footer }) => {
	const { Content, Footer } = HomeLayoutPrmt;
	const { styles } = useStyles();

	const { isFooter, setIsFooter } = useContext(ThemeContextPrmt);

	useEffect(() => {
		if (footer) setIsFooter(true);
		return () => setIsFooter(false);
	}, [isFooter, footer, setIsFooter]);

	return (
		<HomeLayoutPrmt className={styles.layout}>
			<HomeHeaderPrmt title={title} theme={theme} avatar={avatar} />
			<HomeLayoutPrmt>
				<HomeSidebarPrmt buttons={buttons} />
				<Content className={styles.content}>{children}</Content>
			</HomeLayoutPrmt>
			{footer && <Footer className={styles.footer}>{footer}</Footer>}
		</HomeLayoutPrmt>
	);
};
