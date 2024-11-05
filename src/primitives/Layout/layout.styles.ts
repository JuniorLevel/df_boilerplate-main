import { createStyles } from 'antd-style';

export const footerHeight = 62;

export const useStyles = createStyles(({ token, css }) => ({
	layout: css`
		height: 100vh;
	`,
	content: css`
		background-color: ${token.colorBgBase};
		color: ${token.colorText};
		padding: ${token.padding}px;
		overflow: auto;
	`,
	header: css`
		font-size: ${token.fontSizeHeading3}px;
		padding: 0 ${token.padding}px;
		background-color: ${token.colorFillTertiary};
		color: ${token.colorText};
	`,
	headerMobile: css`
		font-size: ${token.fontSizeHeading3}px;
		padding: 0 ${token.padding}px;
		background-color: ${token.colorFillTertiary};
		color: ${token.colorText};
	`,
	sidebar: css`
		background-color: ${token.colorFillTertiary};
		color: ${token.colorText};
		overflow: auto;
	`,
	sidebarNavigation: css`
		color: ${token.colorText};
		transition: background-color 0.3s ease;
		&:hover {
			background-color: ${token.colorBgTextHover};
		}
	`,
	footer: css`
		height: ${footerHeight}px;
		background-color: ${token.colorFillTertiary};
		color: ${token.colorText};
	`,
}));
