import { useState } from 'react';

export const useDate = () => {
	const createAndFormatDate = (): string => {
		const date = new Date();
		const currentDate = `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getFullYear()).slice(-2).padStart(2, '0')}`;
		const currentTime = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
		return `${currentDate}-${currentTime}`;
	};

	const [durationStart] = useState(createAndFormatDate());

	return { durationStart };
};
