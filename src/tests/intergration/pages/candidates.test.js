import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
// redux mock-store
import { makeStore } from "../../utils/mock-store";
// candidates page
import Candidates from "../../../pages/candidates";
import { GET_CANDIDATES } from "../../../redux/action-types";

describe("Page - Candidates", () => {
	let useEffect;
	let store;
	const mockUseEffect = () => {
		useEffect.mockImplementationOnce((f) => f());
	};
	test("should call getCandiates on mount", () => {
		/* mocking store */
		store = makeStore({ candidates: { loading: false, data: [] } });
		/* mocking useEffect */
		useEffect = jest.spyOn(React, "useEffect");
		mockUseEffect(); //

		/* shallow rendering */
		mount(
			<Provider store={store}>
				<Candidates />
			</Provider>
		);
		const actions = store.getActions();
		const expected_action = {
			type: GET_CANDIDATES,
			data: { loading: true, data: [] },
		};
		expect(actions[0]).toEqual(expected_action);
	});
});
