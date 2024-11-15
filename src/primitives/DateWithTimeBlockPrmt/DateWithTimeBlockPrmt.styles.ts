import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
	block: css`
		border: 1px solid ${token.colorPrimaryBorder};
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
	`,
}));
