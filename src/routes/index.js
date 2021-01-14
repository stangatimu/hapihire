import React, { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import Candidates from "../pages/candidates";

const Routes = () => {
	return (
		<Fragment>
			{/* redirect to candidates page */}
			<Route
				path="/"
				component={() => {
					return <Redirect to="/candidates" />;
				}}
			/>
			{/* list of candidates */}
			<Route path="/candidates" component={() => <Candidates />} />
			{/* view selected candited */}
			<Route
				path="/candidates/:id"
				component={() => <p>selected candidate</p>}
			/>
		</Fragment>
	);
};

export default Routes;
