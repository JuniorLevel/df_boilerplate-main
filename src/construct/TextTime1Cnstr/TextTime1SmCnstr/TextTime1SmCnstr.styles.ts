import { createStyles } from '@/primitives/createStyles';

export const screenSMMax = '575px';

export const useStyles = createStyles(({ token, css }) => ({
	container: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
	content: css`
		width: 100%;
		align-self: stretch;
	`,
}));
