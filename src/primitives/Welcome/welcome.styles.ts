import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
	welcome: css`
		height: 100vh;
	`,
	layout: css`
		width: 100%;
		max-width: 300px;
		padding: ${token.paddingXL}px ${token.padding}px;
	`,
	buttonContainer: css`
		button {
			margin-bottom: ${token.margin}px;
		}
	`,
	title: css`
		text-align: center;
	`,
	input: css`
		margin-bottom: ${token.margin}px;
	`,
}));
