import React, { FC, ReactNode } from 'react';
import { StatusProvider, StatusContext } from './StatusContainerContext';
import { StatusUnmodified } from './StatusUnmodified/StatusUnmodified';
import { StatusChanged } from './StatusChanged/StatusChanged';
import { StatusUpdated } from './StatusUpdated/StatusUpdated';

interface IStatusContainer {
	children: ReactNode;
}

export const StatusContainer: FC<IStatusContainer> = ({ children }) => (
	<StatusProvider>
		<StatusContext.Consumer>
			{({ status, counter, role }) => (
				<div>
					{status === 'unmodified' && <StatusUnmodified counter={counter}>{children}</StatusUnmodified>}
					{status === 'changed' && <StatusChanged role={role}>{children}</StatusChanged>}
					{status === 'updated' && <StatusUpdated counter={counter}>{children}</StatusUpdated>}
				</div>
			)}
		</StatusContext.Consumer>
	</StatusProvider>
);
