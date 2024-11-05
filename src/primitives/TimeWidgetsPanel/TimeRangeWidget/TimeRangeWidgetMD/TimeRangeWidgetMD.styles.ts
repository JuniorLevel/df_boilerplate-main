import { createStyles } from 'antd-style';

export const screenLGMax = '991px';
export const screenSMMin = '576px';

export const useStyles = createStyles(({ token, css }) => ({
	container: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
	content: css`
		width: 100%;
		/* flex: 1 1 40%; */
		/* align-self: stretch; */
	`,
}));
