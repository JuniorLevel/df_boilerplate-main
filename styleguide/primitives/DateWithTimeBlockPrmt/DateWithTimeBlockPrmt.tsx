import React, { FC } from 'react';
import { Flex, Typography } from 'antd';
import { useStyles } from './DateWithTimeBlockPrmt.styles';

interface IDateWithTimeBlockPrmtProps {
	durationTime?: string;
}

export const DateWithTimeBlockPrmt: FC<IDateWithTimeBlockPrmtProps> = ({ durationTime }) => {
	const { Text } = Typography;

	const { styles } = useStyles();

	const date = durationTime ? durationTime?.split('-')[0] : '';
	const time = durationTime ? durationTime?.split('-')[1] : '';

	return (
		<Flex wrap gap={10} align="center" justify="center">
			{durationTime ? (
				<>
					<Flex gap={10}>
						{date.split('.').map((item, idx) => (
							<Text key={idx} className={styles.block}>
								{item}
							</Text>
						))}
					</Flex>
					<Flex gap={10}>
						{time.split(':').map((item, idx) => (
							<Text key={idx} className={styles.block}>
								{item}
							</Text>
						))}
					</Flex>
				</>
			) : (
				<Flex gap={10}>
					{[0, 2, 3, 4, 5, 5].map((item, idx) => (
						<Text key={idx} className={styles.block} />
					))}
				</Flex>
			)}
		</Flex>
	);
};
