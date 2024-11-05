import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
	unmodified: css`
		position: relative;
		padding: ${token.paddingXS}px;
		background-color: ${token.colorFill};
	`,
	fio: css`
		margin-right: ${token.marginXS}px;
		border: 1px solid ${token.colorBgMask};
		border-radius: 50%;
		padding: ${token.paddingXXS}px;
	`,
	badge: css`
		position: absolute;
		top: 18px;
		right: 35px;
	`,
	moreBtn: css`
		border: none;
		color: ${token.colorIcon} !important;
		width: 20px !important;
	`,
}));
