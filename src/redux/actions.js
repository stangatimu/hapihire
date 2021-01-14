import * as actions from "./action-types";
import API from "../axios";
import handleAxiosError from "../lib/handle-axios.error";

export const getCandidates = () => async (dispatch) => {
	// initalise loading
	dispatch({
		type: actions.GET_CANDIDATES,
		data: {
			loading: true,
			data: [],
		},
	});
	try {
		const response = await API.get("/candidates");
		// get response data
		const candidates = response.data;
		// store data in redux
		dispatch({
			type: actions.GET_CANDIDATES,
			data: {
				loading: false,
				data: candidates,
			},
		});
	} catch (e) {
		// get error message
		const error_message = handleAxiosError(e);
		dispatch({
			type: actions.GET_CANDIDATES,
			data: {
				loading: false,
				data: [],
				error: error_message,
			},
		});
	}
};
