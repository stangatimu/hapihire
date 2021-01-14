import { CircularProgress, Grid, Paper, Typography } from "@material-ui/core";
import { CommentOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const CandidatesView = ({ data = [], loading }) => {
	return (
		<Grid
			container
			style={{ width: "700px", maxWidth: "98%", margin: "0 auto" }}
			justify="center"
		>
			{/* show loader */}
			{loading && <CircularProgress size={24} thickness={4} />}
			{/* map candidates */}
			{data.map((candidate) => (
				<Candidate data={candidate} />
			))}
		</Grid>
	);
};

export default CandidatesView;

export const Candidate = ({ data = {} }) => {
	return (
		<Link
			style={{ textDecoration: "none", width: "100%" }}
			to={"/candidates/" + data.id}
		>
			<Grid
				component={Paper}
				container
				justify="space-between"
				style={{ padding: "5px", margin: "5px auto" }}
			>
				<Grid item xs={12}>
					<Typography color="primary" variant="h6">
						{data.name}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography color="primary" style={{ color: "grey" }}>
						{data.email}
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography style={{ color: "grey" }}>
						{data.phone}
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography align="right">
						<CommentOutlined
							style={{ marginBottom: "-7px" }}
							color="primary"
						/>
						&nbsp; {data.comments?.length}
					</Typography>
				</Grid>
			</Grid>
		</Link>
	);
};
