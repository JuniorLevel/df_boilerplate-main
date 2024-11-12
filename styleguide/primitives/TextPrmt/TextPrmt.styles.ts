import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
	paragraph: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
		width: 100%;
		min-height: 60px;
		height: 100%;
		margin: 0 !important;
	`,
}));
