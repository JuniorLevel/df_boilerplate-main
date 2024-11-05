import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
	panel: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
	weeks: css`
		border: 1px solid ${token.colorPrimaryBorder};
		width: 30px;
		height: 30px;
		background-color: ${token.colorPrimaryBorder};
	`,
	years: css`
		border: 1px solid ${token.colorPrimaryBorder};
		width: 30px;
		height: 30px;
		background-color: ${token.colorPrimaryBorder};
	`,
}));
