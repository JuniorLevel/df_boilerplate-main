import { createStyles } from 'antd-style';

export const screenMDMax = '767px';
export const screenSMMin = '576px';

export const useStyles = createStyles(({ token, css }) => ({
	container: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
}));
