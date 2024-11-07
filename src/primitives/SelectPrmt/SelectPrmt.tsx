import { Select } from 'antd';
import React, { FC } from 'react';

interface ISelectPrmtProps {
	options: { value: string; label: string }[];
}

export const SelectPrmt: FC<ISelectPrmtProps> = ({ options }) => {
	return <Select showSearch placeholder="Select a person" filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())} options={options} />;
};
