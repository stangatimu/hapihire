import * as actions from "./action-types";

let initial_state = {
	candidate: {
		loading: false,
		data: [],
	},
};

const reducer = (state = initial_state, action) => {
	switch (action.type) {
		case actions.GET_CANDIDATES:
			return {
				candidate: { data: action.data, loading: false },
			};
		default:
			return state;
	}
};

export default reducer;
