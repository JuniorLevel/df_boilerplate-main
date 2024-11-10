import React, { FC, ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';
import MoreOutlined from '@ant-design/icons/MoreOutlined';
import CloseCircleOutlined from '@ant-design/icons/CloseCircleOutlined';
import { Button, Flex } from 'antd';
import { useStyles, screenSMMax } from './WidgetContainerPrmt.styles';

interface IWidgetContainerPrmtProps {
	children: ReactNode;
	actionOnBody?: boolean;
}

export const WidgetContainerPrmt: FC<IWidgetContainerPrmtProps> = ({ children, actionOnBody }) => {
	const isMobile = useMediaQuery({
		query: `(max-width: ${screenSMMax})`,
	});

	const { styles } = useStyles();

	return (
		<div className={styles.container}>
			<div className={styles.content}>{children}</div>
			<Flex gap={10} className={actionOnBody ? styles.panelActionOnBody : styles.panel}>
				{!isMobile && <Button size="large" className={styles.closeBtn} icon={<CloseCircleOutlined />} />}
				<Button size="large" className={styles.moreBtn} icon={<MoreOutlined />} />
			</Flex>
		</div>
	);
};
