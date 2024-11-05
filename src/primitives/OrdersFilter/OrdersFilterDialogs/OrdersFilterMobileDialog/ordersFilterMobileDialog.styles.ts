import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
	dialog: css`
		width: 100%;
		height: 100%;
		background-color: ${token.colorPrimaryBg};
		padding: ${token.padding}px;
		overflow: auto;
	`,
	cardItem: css`
		margin-bottom: ${token.margin}px;
	`,
}));
