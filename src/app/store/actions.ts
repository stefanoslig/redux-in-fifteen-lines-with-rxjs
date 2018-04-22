export interface UpVote {
	type: '[votes] UP_VOTE';
	name: string;
}

export interface DownVote {
	type: '[votes] DOWN_VOTE';
	name: string;
}

export interface Reset {
	type: '[votes] RESET';
}

export type VoteAction = UpVote | DownVote | Reset;
