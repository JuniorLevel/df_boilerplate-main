import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
	cards: css`
		position: relative;
	`,
	closeBtn: css`
		position: absolute;
		top: 5px;
		right: 5px;
	`,
	arrowsBtn: css`
		position: absolute;
		top: 5px;
		right: 5px;
	`,
	popover: css`
		border-radius: 0;
		border: 1px solid ${token.colorBorder};
		width: 250px;
		height: 350px;
		overflow: auto;
	`,
	popoverItem: css`
		margin-bottom: 16px;
		&:last-child {
			margin-bottom: 0;
		}
	`,
	card: css`
		border-radius: 0;
		border: 1px solid ${token.colorBorder};
	`,
}));
