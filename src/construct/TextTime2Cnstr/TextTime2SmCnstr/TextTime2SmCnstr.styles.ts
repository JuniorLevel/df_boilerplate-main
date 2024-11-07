import { createStyles } from '@/primitives/createStyles';

export const screenSMMax = '575px';

export const useStyles = createStyles(({ token, css }) => ({
	container: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
	content: css`
		width: 100%;
		order: 3;
	`,
	timeBlock: css`
		order: 2;
	`,
	weeksAndYearsBlock: css`
		flex-direction: column-reverse;
		order: 1;
	`,
}));
