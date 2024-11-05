import React, { FC, useContext, useEffect } from 'react';
import { Avatar, Switch, Flex, Layout, Space } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import MediaQuery from 'react-responsive';
import { HomeHeaderMobile } from './HomeHeaderMobile/HomeHeaderMobile';
import { ThemeContext } from '../../ThemeWrapper/ThemeContext';
import { Logo } from './Logo/Logo';
import { useStyles } from '../layout.styles';

interface IHomeHeaderProps {
	title: string;
	theme?: string;
	avatar: { title: string };
}

export const HomeHeader: FC<IHomeHeaderProps> = ({ title, theme, avatar }) => {
	const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

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
			<MediaQuery minWidth={575}>
				<Header className={styles.header}>
					<Flex justify="space-between">
						<Logo title={title} />
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
			<HomeHeaderMobile title={title} />
		</>
	);
};
