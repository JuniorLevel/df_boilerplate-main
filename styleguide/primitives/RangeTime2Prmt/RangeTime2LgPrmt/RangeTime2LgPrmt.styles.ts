import { createStyles } from 'antd-style';

export const screenXXLMax = '1599px';

export const useStyles = createStyles(({ token, css }) => ({
	container: css`
		padding: ${token.paddingXS}px;
		border: 1px solid ${token.colorPrimaryBorder};
	`,
	block: css`
		order: -1;
	`,
}));
