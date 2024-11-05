import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
	dialog: css`
		position: absolute;
		justify-content: center;
		align-items: center;
		top: 0;
		width: 100%;
		height: 100%;
	`,
	container: css`
		width: 100%;
		height: 100%;
		max-width: 360px;
		max-height: 500px;
		background-color: ${token.colorPrimaryBg};
		padding: 20px;
		border: 1px solid ${token.colorPrimaryBorder};
		overflow: auto;
	`,
	cardItem: css`
		color: ${token.colorTextBase};
		margin-bottom: ${token.margin}px;
	`,
}));
