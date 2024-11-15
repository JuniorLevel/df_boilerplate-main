export interface ITask {
	id: string;
	title: string;
	duration: IDuration;
	taskName: string;
	// creator: IPerson;
	// texts: ITaskText[];
	executor: string;
	// executors: ITaskExecutors[];
	// files: IFile[];
	// tasks?: ITask[];
}

export interface IDuration {
	id: string;
	// name?: string;
	start?: string;
	end?: string;
}

// interface IPerson {
// 	id: string;
// 	firstName: string;
// 	lastName: string;
// }
