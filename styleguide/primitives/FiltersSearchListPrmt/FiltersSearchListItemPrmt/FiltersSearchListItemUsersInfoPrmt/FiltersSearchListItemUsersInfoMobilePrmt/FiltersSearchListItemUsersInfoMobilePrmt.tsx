import React, { FC } from 'react';
import { Row, Col } from 'antd';
import MediaQuery from 'react-responsive';
import { FiltersSearchListItemUsersInfoStatusPrmt } from '../FiltersSearchListItemUsersInfoStatusPrmt/FiltersSearchListItemUsersInfoStatusPrmt';
import { useStyles, screenSMMax } from '../../../filtersSearchListPrmt.styles';
import { StatusContainerPrmt } from '@/primitives/OrdersFilterPrmt/StatusContainerPrmt/StatusContainerPrmt';

interface IFiltersSearchListItemUsersInfoMobilePrmtProps {
	dataSearchUsers: Array<any> | null;
}

export const FiltersSearchListItemUsersInfoMobilePrmt: FC<IFiltersSearchListItemUsersInfoMobilePrmtProps> = ({ dataSearchUsers }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={screenSMMax}>
			<Row gutter={[12, 12]} className={styles.filtersSearchListItemUsersInfoMobileRow}>
				{dataSearchUsers?.map((user) => (
					<Col xs={24} sm={24} md={24} xl={8} key={user.id}>
						<StatusContainerPrmt>
							<FiltersSearchListItemUsersInfoStatusPrmt user={user} />
						</StatusContainerPrmt>
					</Col>
				))}
				{!dataSearchUsers && <div>Not found</div>}
			</Row>
		</MediaQuery>
	);
};
