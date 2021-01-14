import moxios from "moxios";
import { makeStore } from "../../utils/mock-store";
// expect data from api call
import candidates from "../../utils/candidates.json";
import { getCandidates } from "../../../redux/actions";
import { GET_CANDIDATES } from "../../../redux/action-types";

// mock store
const store = makeStore({ candidates: { loading: false, data: [] } });

describe("getCandidates -  should call the api and get candidates", () => {
	beforeEach(() => moxios.install());
	afterEach(() => moxios.uninstall());

	test("should update state to loading on getCandidates", async () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: { data: candidates },
			});
		});

		await store.dispatch(getCandidates()).then(() => {
			const actionsCalled = store.getActions();
			const expected_loading = {
				data: {
					data: [],
					loading: true,
				},
				type: GET_CANDIDATES,
			};
			expect(actionsCalled[0]).toEqual(expected_loading);
		});
	});

	test("successfull request call getCandidates action", async () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: { data: candidates },
			});
		});

		await store.dispatch(getCandidates()).then(() => {
			const actionsCalled = store.getActions();
			const expected = {
				data: {
					data: candidates,
					loading: false,
				},
				type: GET_CANDIDATES,
			};
			// test second action after loading
			expect(actionsCalled[1]).toEqual(expected);
		});
	});
});
