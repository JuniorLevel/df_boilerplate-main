import { createStyles } from 'antd-style';
import { footerHeight } from '../../primitives/Layout/layout.styles';

export const useStyles = createStyles(({ token, css }) => ({
	order: css`
		height: 100%;
		border: 1px solid ${token.colorPrimaryBorder};
		font-size: ${token.fontSizeHeading2}px;
	`,
	orderListContainer: css`
		height: calc(100vh - 220px) !important;
		overflow: auto;
		overflow-x: hidden;
	`,
	orderListContainerWithFooter: css`
		height: calc(100vh - calc(220px + ${footerHeight}px)) !important;
		overflow: auto;
		overflow-x: hidden;
	`,
	orderListDiffContainer: css`
		height: calc(100vh - 495px) !important;
		overflow: auto;
		overflow-x: hidden;
	`,
	orderListDiffContainerWithFooter: css`
		height: calc(100vh - calc(495px + ${footerHeight}px)) !important;
		overflow: auto;
		overflow-x: hidden;
	`,
	orderListItemUsersInfo: css`
		width: 100%;
	`,
	orderListItemNotFound: css`
		width: 100%;
		padding: ${token.padding}px;
		margin: 0 ${token.marginXS}px;
		margin-bottom: ${token.marginXS}px;
		border: 1px solid ${token.colorPrimaryBorder};
		text-align: center;
	`,
	orderListPreviewContainer: css``,
}));
