import React, { FC } from 'react';
import { Row, Col } from 'antd';
import MediaQuery from 'react-responsive';
import { FiltersSearchListItemUsersInfoStatus } from '../FiltersSearchListItemUsersInfoStatus/FiltersSearchListItemUsersInfoStatus';
import { useStyles } from '../../../filters.search.list.styles';
import { StatusContainer } from '@/tmp/OrdersFilter/StatusContainer/StatusContainer';

interface IFiltersSearchListItemUsersInfoMobile {
	dataSearchUsers: Array<any> | null;
}

export const FiltersSearchListItemUsersInfoMobile: FC<IFiltersSearchListItemUsersInfoMobile> = ({ dataSearchUsers }) => {
	const { styles } = useStyles();

	return (
		<MediaQuery maxWidth={360}>
			<Row gutter={[12, 12]} className={styles.filtersSearchListItemUsersInfoMobileRow}>
				{dataSearchUsers?.map((user) => (
					<Col xs={24} sm={24} md={24} xl={8} key={user.id}>
						<StatusContainer>
							<FiltersSearchListItemUsersInfoStatus user={user} />
						</StatusContainer>
					</Col>
				))}
				{!dataSearchUsers && <div>Not found</div>}
			</Row>
		</MediaQuery>
	);
};
