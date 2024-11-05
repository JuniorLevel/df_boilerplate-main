import { createStyles } from 'antd-style';

export const screenSMMax = '575px';

export const useStyles = createStyles(({ token, css }) => ({
	container: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
	content: css`
		position: relative;
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingSM}px;
		width: 100%;
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
		width: 100%;
	`,
	avatarItem: css`
		font-size: ${token.fontSizeIcon}px;
	`,
}));
