import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
	dateBlock: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
	timeBlock: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
}));
