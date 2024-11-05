import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
	changed: css`
		position: relative;
		padding: ${token.paddingXS}px;
		background-color: ${token.colorSuccessBorder};
	`,
	container: css`
		border: 1px solid ${token.colorBgMask};
		padding: ${token.paddingXS}px;
		margin-right: ${token.marginXS}px;
	`,
	fio: css`
		margin-right: ${token.marginXS}px;
		border: 1px solid ${token.colorBgMask};
		border-radius: 50%;
		padding: ${token.paddingXXS}px;
	`,
	role: css`
		position: absolute;
		top: 0;
		left: 0;
	`,
	moreBtn: css`
		position: absolute;
		right: 7px;
		border: none;
		color: ${token.colorIcon} !important;
		width: 20px !important;
	`,
}));
