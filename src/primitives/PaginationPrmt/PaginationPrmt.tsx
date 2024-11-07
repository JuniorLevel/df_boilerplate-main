import React, { FC } from 'react';
import { Pagination } from 'antd';

interface IPaginationPrmtProps {
	defaultCurrent: number;
	total: number;
}

export const PaginationPrmt: FC<IPaginationPrmtProps> = ({ defaultCurrent, total }) => {
	return <Pagination defaultCurrent={defaultCurrent} total={total} />;
};
