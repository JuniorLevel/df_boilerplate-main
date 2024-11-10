import React, { FC, ReactNode } from 'react';
import { StatusProviderPrmt, StatusContextPrmt } from './StatusContainerContextPrmt';
import { StatusUnmodifiedPrmt } from './StatusUnmodifiedPrmt/StatusUnmodifiedPrmt';
import { StatusChangedPrmt } from './StatusChangedPrmt/StatusChangedPrmt';
import { StatusUpdatedPrmt } from './StatusUpdatedPrmt/StatusUpdatedPrmt';

interface IStatusContainerPrmtProps {
	children: ReactNode;
}

export const StatusContainerPrmt: FC<IStatusContainerPrmtProps> = ({ children }) => (
	<StatusProviderPrmt>
		<StatusContextPrmt.Consumer>
			{({ status, counter, role }) => (
				<div>
					{status === 'unmodified' && <StatusUnmodifiedPrmt counter={counter}>{children}</StatusUnmodifiedPrmt>}
					{status === 'changed' && <StatusChangedPrmt role={role}>{children}</StatusChangedPrmt>}
					{status === 'updated' && <StatusUpdatedPrmt counter={counter}>{children}</StatusUpdatedPrmt>}
				</div>
			)}
		</StatusContextPrmt.Consumer>
	</StatusProviderPrmt>
);
