import { createStyles } from 'antd-style';

export const screenLGMax = '991px';
export const screenMDMin = '768px';

export const useStyles = createStyles(({ token, css }) => ({
	container: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
	content: css`
		flex: 1 1 50%;
		align-self: stretch;
	`,
}));
