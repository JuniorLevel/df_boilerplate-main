import React, { FC } from 'react';
import { Select } from 'antd';

interface ISelectPrmtProps {
	options: { value: string; label: string }[];
	onChange: (value: string) => void;
}

export const SelectPrmt: FC<ISelectPrmtProps> = ({ options, onChange }) => {
	return (
		<Select
			open
			onChange={onChange}
			popupMatchSelectWidth={250}
			filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
			options={options}
		/>
	);
};
