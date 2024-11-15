import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
	container: css`
		margin-bottom: ${token.marginXS}px;
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.paddingXS}px;
	`,
	cardElementActionOnBody: css`
		position: absolute;
		top: 5px;
		left: -5px;
		z-index: ${token.zIndexPopupBase};
	`,
	cardElement: css`
		display: flex;
		gap: 5px;
		position: relative;
		align-items: center;
		/* border: 1px solid ${token.colorPrimaryBorder}; */
		padding: ${token.paddingXS}px;
		.ant-select {
			opacity: 0;
			width: 0;
		}
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
