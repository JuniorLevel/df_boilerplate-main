import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
	updated: css`
		position: relative;
		padding: ${token.paddingXS}px;
		background-color: ${token.colorErrorBorder};
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
		right: 90px;
	`,
	closeBtn: css`
		border: none;
		color: ${token.colorErrorTextActive} !important;
		width: 10px !important;
	`,
	checkBtn: css`
		border: none;
		color: ${token.colorSuccessActive} !important;
		width: 10px !important;
	`,
	moreBtn: css`
		border: none;
		color: ${token.colorIcon} !important;
		width: 20px !important;
	`,
}));
