import { createStyles } from 'antd-style';

export const screenSMMax = '575px';

export const useStyles = createStyles(({ token, css }) => ({
	container: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
		position: relative;
		display: flex;
		align-items: center;
		gap: 10px;
		margin: ${token.marginSM}px 0px;
	`,
	content: css`
		width: 100%;
	`,
	panelActionOnBody: css`
		position: absolute;
		right: 10px;
		top: 40%;
		z-index: ${token.zIndexPopupBase};
	`,
	closeBtn: css`
		border: 1px solid ${token.colorPrimaryBorder};
		border-radius: 0;
	`,
	moreBtn: css`
		border-radius: 0;
		border: 1px solid ${token.colorPrimaryBorder};
	`,
	panel: css`
		display: flex;
		gap: 10px;
	`,
}));
