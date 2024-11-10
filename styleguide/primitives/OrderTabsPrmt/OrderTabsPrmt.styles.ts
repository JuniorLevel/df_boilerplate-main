import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
	tabs: css`
		height: 100%;
		.ant-tabs-content,
		.ant-tabs-content-top,
		.ant-tabs-tabpane,
		.ant-row {
			height: 100%;
			margin-bottom: ${token.margin}px;
		}
		.ant-tabs-nav {
			margin: 0;
		}
		.ant-tabs-tab-btn {
			padding: ${token.padding}px;
			border: 1px solid ${token.colorPrimaryBorder};
		}
	`,
	orderContainer: css`
		height: 100%;
		padding: ${token.padding}px 0 0 0;
		.ant-steps-item-description {
			border: 1px solid ${token.colorPrimaryBorder};
			padding: ${token.padding}px;
		}
	`,
	orderPreview: css`
		height: 100%;
		border: 1px solid ${token.colorPrimaryBorder};
		font-size: ${token.fontSizeHeading2}px;
	`,
}));
