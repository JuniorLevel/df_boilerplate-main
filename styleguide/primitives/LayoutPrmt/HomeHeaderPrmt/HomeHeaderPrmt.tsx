import React, { FC, useContext, useEffect } from 'react';
import { Avatar, Switch, Flex, Layout, Space } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import MediaQuery from 'react-responsive';
import { HomeHeaderMobilePrmt } from './HomeHeaderMobilePrmt/HomeHeaderMobilePrmt';
import { LogoPrmt } from './LogoPrmt/LogoPrmt';
import { useStyles, screenSMMin } from '../LayoutPrmt.styles';
import { ThemeContextPrmt } from '@/primitives/ThemeWrapperPrmt/ThemeContextPrmt';

interface IHomeHeaderPrmtProps {
	title: string;
	theme?: string;
	avatar: { title: string };
}

export const HomeHeaderPrmt: FC<IHomeHeaderPrmtProps> = ({ title, theme, avatar }) => {
	const { currentTheme, setCurrentTheme } = useContext(ThemeContextPrmt);

	useEffect(() => {
		if (theme) {
			setCurrentTheme(theme);
		}
	}, [theme, setCurrentTheme]);

	const onChange = (checked: boolean) => {
		const changedTheme = checked ? 'dark' : 'light';
		setCurrentTheme(changedTheme);
	};

	const { Header } = Layout;
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenSMMin}>
				<Header className={styles.header}>
					<Flex justify="space-between">
						<LogoPrmt title={title} />
						<Flex align="center">
							<Space>
								<Switch checkedChildren={<SunOutlined />} unCheckedChildren={<MoonOutlined />} onChange={onChange} checked={currentTheme === 'dark'} />
								<Avatar shape="circle" size="large">
									{avatar.title}
								</Avatar>
							</Space>
						</Flex>
					</Flex>
				</Header>
			</MediaQuery>
			<HomeHeaderMobilePrmt title={title} />
		</>
	);
};
