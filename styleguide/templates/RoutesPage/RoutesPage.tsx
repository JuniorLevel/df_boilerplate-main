import React, { FC } from 'react';
import { useNavigate, Outlet } from '@tanstack/react-router';
import { styled } from 'styled-components';

interface IRoutesPageProps {
	children: React.ReactNode;
}

type Navigate = { navigate: (path: string) => void };

const DivStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	padding: 20px;
`;

export const RoutesPage: FC<IRoutesPageProps> = ({ children }) => {
	const navigate = useNavigate();

	return (
		<>
			<hr />
			<DivStyled>{React.Children.map(children, (child) => (React.isValidElement(child) ? React.cloneElement(child, { navigate } as unknown as Navigate) : child))}</DivStyled>
			<hr />
			<Outlet />
		</>
	);
};
