import { createStyles } from 'antd-style';

export const screenXLMin = '1200px';

export const useStyles = createStyles(({ token, css }) => ({
	container: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
	progress: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
	panel: css`
		padding: ${token.paddingXS}px;
	`,
	dateWithTimeBlock: css`
		flex-direction: row-reverse;
	`,
}));
