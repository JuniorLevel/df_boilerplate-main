import { createStyles } from 'antd-style';

export const screenMDMax = '767px';

export const useStyles = createStyles(({ token, css }) => ({
	container: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
	selectAndPerson: css`
		width: 100%;
		/* flex: 1 0 50%; */
	`,
}));
