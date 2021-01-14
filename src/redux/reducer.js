import * as actions from "./action-types";

let initial_state = {
	candidate: {
		loading: false,
		data: [],
	},
	selected: {
		loading: false,
		data: {},
	},
};

const reducer = (state = initial_state, action) => {
	switch (action.type) {
		case actions.GET_CANDIDATES:
			return {
				...state,
				candidate: action.data,
			};
		case actions.GET_CANDIDATE_BY_ID:
			return {
				...state,
				selected: action.data,
			};
		default:
			return state;
	}
};

export default reducer;
