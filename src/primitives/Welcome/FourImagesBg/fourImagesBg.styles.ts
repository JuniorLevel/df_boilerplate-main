import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
	image: css`
		position: relative;
		z-index: ${token.zIndexPopupBase};
		img {
			position: absolute;
			width: 50%;
			height: 50%;
			object-fit: cover;
			z-index: -1;
			&:nth-child(1) {
				top: 0;
				left: 0;
			}
			&:nth-child(2) {
				top: 0;
				right: 0;
			}
			&:nth-child(3) {
				bottom: 0;
				left: 0;
			}
			&:nth-child(4) {
				bottom: 0;
				right: 0;
			}
		}
	`,
}));
