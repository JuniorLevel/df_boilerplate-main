import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
	panel: css`
		padding: ${token.padding}px;
		> div {
			margin-bottom: ${token.margin}px;
		}
	`,
}));
