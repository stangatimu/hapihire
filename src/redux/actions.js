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

export const getCandidateById = (id) => async (dispatch) => {
	// initalise loading
	dispatch({
		type: actions.GET_CANDIDATE_BY_ID,
		data: {
			loading: true,
			data: {},
		},
	});
	try {
		const response = await API.get("/candidates/" + id);
		// get response data
		const candidate = response.data;
		// store data in redux
		dispatch({
			type: actions.GET_CANDIDATE_BY_ID,
			data: {
				loading: false,
				data: candidate,
			},
		});
	} catch (e) {
		// get error message
		const error_message = handleAxiosError(e);
		dispatch({
			type: actions.GET_CANDIDATE_BY_ID,
			data: {
				loading: false,
				data: {},
				error: error_message,
			},
		});
	}
};
