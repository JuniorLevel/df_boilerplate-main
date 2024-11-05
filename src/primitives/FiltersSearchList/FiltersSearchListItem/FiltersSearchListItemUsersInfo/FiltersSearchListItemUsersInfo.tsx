import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
import { Col, Row } from 'antd';
import { FiltersSearchListItemUsersInfoMobile } from './FiltersSearchListItemUsersInfoMobile/FiltersSearchListItemUsersInfoMobile';
import { FiltersSearchListItemUsersInfoStatus } from './FiltersSearchListItemUsersInfoStatus/FiltersSearchListItemUsersInfoStatus';
import { useStyles } from '../../filters.search.list.styles';
import { StatusContainer } from '@/tmp/OrdersFilter/StatusContainer/StatusContainer';

interface IFiltersSearchListItemUsersInfoProps {
	dataSearchUsers: Array<any> | null;
}

export const FiltersSearchListItemUsersInfo: FC<IFiltersSearchListItemUsersInfoProps> = ({ dataSearchUsers }) => {
	const { styles } = useStyles();

	return (
		<>
			<MediaQuery minWidth={361}>
				<Row gutter={[12, 12]} className={styles.filtersSearchListItemUsersInfo}>
					{dataSearchUsers?.map((user) => (
						<Col flex={1} key={user.id}>
							<StatusContainer>
								<FiltersSearchListItemUsersInfoStatus user={user} />
							</StatusContainer>
						</Col>
					))}
					{!dataSearchUsers && <div />}
				</Row>
			</MediaQuery>
			<FiltersSearchListItemUsersInfoMobile dataSearchUsers={dataSearchUsers} />
		</>
	);
};
