import { createStyles } from 'antd-style';

export const screenLGMin = '992px';

export const useStyles = createStyles(({ token, css }) => ({
	container: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
	panel: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
	years: css`
		width: 30px;
		height: 30px;
		background-color: ${token.colorPrimaryBorder};
	`,
}));
