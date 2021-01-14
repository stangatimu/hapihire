import React, { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import Candidate from "../pages/candidate";
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
			<Route
				path="/candidates"
				exact
				component={() => <Candidates view={true} />}
			/>
			{/* view selected candited */}
			<Route
				path="/candidates/:id"
				component={(props) => <Candidate view={true} {...props} />}
			/>
		</Fragment>
	);
};

export default Routes;
