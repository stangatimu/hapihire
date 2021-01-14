import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

const mockStore = configureStore([thunk]);
export const makeStore = (state = {}) => {
	return mockStore({
		...state,
	});
};
