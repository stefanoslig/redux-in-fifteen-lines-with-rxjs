import { VoteAction } from './actions';

export interface State {
	choices: Choice[];
}

export interface Choice {
	name: string;
	votes: number;
}

export const reducer = (state: State, action: VoteAction): State => {
	switch (action.type) {
		case '[votes] UP_VOTE':
			const indexUp = state.choices.findIndex(c => c.name === action.name);
			const choice = state.choices[indexUp];
			const updatedUp: Choice[] = [
				...state.choices.slice(0, indexUp),
				{ ...choice, votes: choice.name === 'Angular' ? choice.votes += 2 : ++choice.votes },
				...state.choices.slice(indexUp + 1)
			];
			return { ...state, choices: updatedUp };
		case '[votes] DOWN_VOTE':
			const indexDown = state.choices.findIndex(c => c.name === action.name);
			const choiceDown = state.choices[indexDown];
			const updatedDown: Choice[] = [
				...state.choices.slice(0, indexDown),
				{ ...choiceDown, votes: choiceDown.name === 'Angular' ? choiceDown.votes += 2 : --choiceDown.votes },
				...state.choices.slice(indexDown + 1)
			];
			return { ...state, choices: updatedDown };
		case '[votes] RESET':
			return {
				choices: [{ name: 'Angular', votes: 0 }, { name: 'Vue', votes: 0 }, { name: 'React', votes: 0 }]
			};
		default:
			return state;
	}
};
