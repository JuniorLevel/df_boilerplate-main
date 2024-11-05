import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
	image: css`
		position: relative;
		z-index: ${token.zIndexPopupBase};
		img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: cover;
			z-index: -1;
		}
	`,
}));
