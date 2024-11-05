import { createStyles } from 'antd-style';
import { footerHeight } from '@/primitives/Layout/layout.styles';

export const useStyles = createStyles(({ token, css }) => ({
	filtersSearchList: css`
		height: 100%;
	`,
	filtersSearchListContent: css`
		overflow-x: hidden;
	`,
	filtersSearchListContainer: css`
		height: calc(100vh - 185px);
	`,
	filtersSearchListContainerWithFooter: css`
		height: calc(100vh - calc(185px + ${footerHeight}px)) !important;
	`,
	filtersSearchListItemGrids: css`
		&:last-child {
			flex: 1;
			max-width: 100%;
		}
	`,
	filtersSearchListItemStatus: css`
		padding: ${token.padding}px;
	`,
	filtersSearchListMobile: css`
		margin-bottom: ${token.margin}px;
	`,
	filtersSearchListItemMobile: css`
		position: relative;
	`,
	filtersSearchListItemMobileInfoStatus: css``,
	notFoundMobile: css`
		border: 1px solid ${token.colorPrimaryBorder};
		padding: ${token.padding}px;
	`,
	filtersSearchListItemUsersInfo: css`
		margin-bottom: ${token.margin}px;
	`,
	filtersSearchListItemUsersInfoStatusUser: css`
		padding: ${token.padding}px 0;
	`,
	filtersSearchListItemUsersInfoMobileRow: css`
		margin-bottom: ${token.margin}px;
	`,
}));
