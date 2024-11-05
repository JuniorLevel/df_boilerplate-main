import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
	ordersFilterCardsContainer: css`
		overflow: auto;
		margin-bottom: ${token.margin}px;
	`,
	sortable: css`
		display: flex;
		gap: 10px;
		margin-right: 10px;
	`,
	card: css`
		border-radius: 0;
		border: 3px solid ${token.colorPrimaryBorder};
		width: 300px;
		height: 350px;
		overflow: auto;
		.ant-card-body {
			padding: ${token.padding}px;
		}
	`,
	cardContainer: css`
		min-height: 312px;
	`,
	cardItem: css`
		color: ${token.colorTextBase};
		margin-bottom: ${token.margin}px;
	`,
	cardBtnDesktop: css`
		border-radius: 0;
		border: 3px solid ${token.colorPrimaryBorder};
		min-width: 300px;
		min-height: 350px;
		div {
			height: 100%;
		}
	`,
	sortableMobile: css`
		display: flex;
		flex-direction: column;
		gap: 10px;
	`,
	cardBtnMobile: css`
		border-radius: 0;
		border: 3px solid ${token.colorPrimaryBorder};
	`,
}));
