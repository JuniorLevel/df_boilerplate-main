import { Row } from 'antd';
import React, { FC, ReactNode } from 'react';

interface IRowPrmt {
	gutter?: [number, number];
	children: ReactNode;
}

export const RowPrmt: FC<IRowPrmt> = ({ gutter, children }) => {
	return <Row gutter={gutter}>{children}</Row>;
};
