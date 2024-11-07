import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
	progress: css`
		background-color: ${token.colorPrimaryBorder};
		border-radius: 50%;
		border: 1px solid ${token.colorPrimaryBorder};
		svg {
			circle {
				stroke-linecap: butt;
				stroke-width: 90%;
			}
		}
	`,
}));
