import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
	block: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
}));
