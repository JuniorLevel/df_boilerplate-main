import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { Col, Row } from 'antd';
import { FiltersSearchListItemUsersInfoMobilePrmt } from './FiltersSearchListItemUsersInfoMobilePrmt/FiltersSearchListItemUsersInfoMobilePrmt';
import { FiltersSearchListItemUsersInfoStatusPrmt } from './FiltersSearchListItemUsersInfoStatusPrmt/FiltersSearchListItemUsersInfoStatusPrmt';
import { useStyles, screenSMMin } from '../../filtersSearchListPrmt.styles';
import { StatusContainerPrmt } from '@/primitives/OrdersFilterPrmt/StatusContainerPrmt/StatusContainerPrmt';

interface IFiltersSearchListItemUsersInfoPrmtProps {
	dataSearchUsers: Array<any> | null;
}

export const FiltersSearchListItemUsersInfoPrmt: FC<IFiltersSearchListItemUsersInfoPrmtProps> = ({ dataSearchUsers }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={screenSMMin}>
				<Row gutter={[12, 12]} className={styles.filtersSearchListItemUsersInfo}>
					{dataSearchUsers?.map((user) => (
						<Col flex={1} key={user.id}>
							<StatusContainerPrmt>
								<FiltersSearchListItemUsersInfoStatusPrmt user={user} />
							</StatusContainerPrmt>
						</Col>
					))}
					{!dataSearchUsers && <div />}
				</Row>
			</MediaQuery>
			<FiltersSearchListItemUsersInfoMobilePrmt dataSearchUsers={dataSearchUsers} />
		</>
	);
};
