import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
	container: css`
		margin-bottom: ${token.marginXS}px;
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
	cardElementActionOnBody: css`
		position: absolute;
		left: 25px;
		top: 35%;
		z-index: ${token.zIndexPopupBase};
	`,
	cardElement: css`
		display: flex;
		gap: 5px;
		position: relative;
		align-items: center;
		/* border: 1px solid ${token.colorPrimaryBorder}; */
		/* padding: ${token.paddingXS}px; */
	`,
	moreBtn: css`
		border-radius: 0;
		width: 20px !important;
		border: 1px solid ${token.colorPrimaryBorder};
	`,
	title: css`
		width: 100%;
	`,
}));
