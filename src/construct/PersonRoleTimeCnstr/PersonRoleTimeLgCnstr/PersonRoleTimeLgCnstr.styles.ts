import { createStyles } from 'antd-style';

export const screenXLMax = '1199px';
export const screenMDMax = '767px';

export const useStyles = createStyles(({ token, css }) => ({
	container: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
	selectAndPerson: css`
		width: 100%;
		align-self: stretch;
	`,
}));
