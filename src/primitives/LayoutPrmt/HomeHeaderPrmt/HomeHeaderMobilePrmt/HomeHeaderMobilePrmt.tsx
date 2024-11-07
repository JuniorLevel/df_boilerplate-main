import React, { FC } from 'react';
import { Avatar, Flex, Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import MediaQuery from 'react-responsive';
import { BurgerMenuPrmt } from '../BurgerMenuPrmt/BurgerMenuPrmt';
import { LogoPrmt } from '../LogoPrmt/LogoPrmt';
import { useStyles, screenSMMax } from '../../LayoutPrmt.styles';

interface IHomeHeaderMobilePrmtProps {
	title: string;
}

export const HomeHeaderMobilePrmt: FC<IHomeHeaderMobilePrmtProps> = ({ title }) => {
	const { Header } = Layout;
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenSMMax}>
			<Header className={styles.headerMobile}>
				<Flex justify="space-between" align="center">
					<BurgerMenuPrmt />
					<LogoPrmt title={title} />
					<Flex align="center">
						<Avatar shape="circle" size="large" icon={<UserOutlined />} />
					</Flex>
				</Flex>
			</Header>
		</MediaQuery>
	);
};
