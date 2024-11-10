import { createStyles } from '@/primitives/createStyles';

export const screenLGMax = '991px';
export const screenSMMin = '576px';

export const useStyles = createStyles(({ token, css }) => ({
	container: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
	content: css`
		width: 100%;
	`,
}));
