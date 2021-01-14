import React from "react";
import { mount, shallow } from "enzyme";
// navbar
import Navbar from "../../../components/navbar";
import { MemoryRouter } from "react-router-dom";

describe("Navbar", () => {
	test("should render toolbar", () => {
		const wrapper = shallow(<Navbar />);
		const Toolbar = wrapper.find("WithStyles(ForwardRef(Toolbar))").first();
		// assert
		expect(Toolbar.exists()).toEqual(true);
	});
	test("should render app logo", () => {
		const wrapper = shallow(<Navbar />);
		const Logo = wrapper.find("WithStyles(ForwardRef(Typography))").first();
		// assert
		expect(Logo.exists()).toEqual(true);
		expect(Logo.text()).toEqual("HireList");
	});
	test("should render back button is param is true", () => {
		const wrapper = mount(
			<MemoryRouter>
				<Navbar is_show_back={true} />
			</MemoryRouter>
		);

		const Link = wrapper.find("Link").first();
		// assert
		expect(Link.exists()).toEqual(true);

		expect(Link.prop("to")).toEqual("/candidates");
	});
});
