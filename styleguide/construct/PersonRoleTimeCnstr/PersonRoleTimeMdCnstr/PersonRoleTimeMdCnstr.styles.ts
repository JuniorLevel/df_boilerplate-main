import { createStyles } from '@/primitives/createStyles';

export const screenMDMin = '768px';
export const screenXLMax = '1199px';

export const useStyles = createStyles(({ token, css }) => ({
	container: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
	selectAndPerson: css`
		width: 100%;
	`,
}));
