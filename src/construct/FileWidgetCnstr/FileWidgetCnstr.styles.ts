import { createStyles } from '@/primitives/createStyles';

export const screenXLMin = '1200px';

export const useStyles = createStyles(({ token, css }) => ({
	container: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
	avatar: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
	content: css`
		flex: 1 0 50%;
	`,
	children: css`
		flex: 1 0 50%;
	`,
}));
