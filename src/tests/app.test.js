import React from "react";
import { mount } from "enzyme";
import App from "../App";

describe("app", () => {
	test("should render app", () => {
		mount(<App />);
	});
});
