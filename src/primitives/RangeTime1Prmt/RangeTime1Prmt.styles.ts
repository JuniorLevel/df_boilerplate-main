import { createStyles } from 'antd-style';

export const screenLGMin = '992px';

export const useStyles = createStyles(({ token, css }) => ({
	container: css`
		border: 1px solid ${token.colorPrimaryBorder};
	`,
	item: css`
		flex: 0 1 50%;
		padding: ${token.paddingXS}px;
	`,
}));
