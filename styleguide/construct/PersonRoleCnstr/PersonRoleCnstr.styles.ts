import { createStyles } from '@/primitives/createStyles';

export const screenSMMin = '576px';

export const useStyles = createStyles(({ token, css }) => ({
	container: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
	content: css`
		position: relative;
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingSM}px;
	`,
	role: css`
		position: absolute;
		top: 0px;
		left: 5px;
		font-size: ${token.fontSizeIcon}px;
	`,
	avatar: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
		flex: 1 1 220px;
	`,
	avatarItem: css`
		font-size: ${token.fontSizeIcon}px;
	`,
}));
