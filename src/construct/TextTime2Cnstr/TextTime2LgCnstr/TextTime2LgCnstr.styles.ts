import { createStyles } from 'antd-style';

export const screenXLMax = '1199px';
export const screenSMMin = '576px';

export const useStyles = createStyles(({ token, css }) => ({
	container: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
	content: css`
		width: 100%;
		align-self: stretch;
		order: 3;
	`,
	timeBlock: css`
		order: 1;
	`,
	weeksAndYearsBlock: css`
		order: 2;
	`,
}));
