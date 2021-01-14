import {
	CircularProgress,
	Divider,
	Grid,
	Link,
	Paper,
	Typography,
} from "@material-ui/core";
import { Attachment, Room, Work } from "@material-ui/icons";
import React from "react";
import Comments from "../../components/comments";

const CandidateView = ({ data = [], loading }) => {
	return (
		<Grid
			container
			style={{ width: "700px", maxWidth: "98%", margin: "0 auto" }}
			justify="center"
		>
			{/* show loader */}
			{loading && <CircularProgress size={24} thickness={4} />}
			{/* map candidates */}
			{data?.name && (
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
					<Grid item xs={12} md={6} lg={4}>
						<Typography color="primary" style={{ color: "grey" }}>
							{data.email}
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography style={{ color: "grey" }}>
							{data.phone}
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography style={{ color: "grey", margin: "5px 0" }}>
							<Room style={{ marginBottom: "-7px" }} />
							{data.address}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Divider />
					</Grid>
					<Grid item xs={12}>
						<Typography style={{ color: "grey" }} variant="h6">
							Bio
						</Typography>
						<Typography>{data.about}</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography style={{ color: "grey" }} variant="h6">
							Work Experience
						</Typography>
						{data.experience.map((exp) => (
							<Grid style={{ marginBottom: "10px" }} item xs={12}>
								<Typography>
									<Work
										style={{ marginBottom: "-7px" }}
										color="primary"
									/>
									&nbsp;
									{exp.position}
									{" - "}
									<em>{exp.company}</em>
								</Typography>
								<Divider />
							</Grid>
						))}
						{data.experience?.length === 0 && (
							<em>No work experience</em>
						)}
					</Grid>
					<Grid item xs={12}>
						<Typography style={{ color: "grey" }} variant="h6">
							Resume
						</Typography>
						{data.cv ? (
							<Link href={data.cv} rel="noopener norefer">
								<Typography noWrap={true}>
									<Attachment
										style={{ marginBottom: "-7px" }}
										color="primary"
									/>
									&nbsp;
									{"view cv"}
								</Typography>
							</Link>
						) : (
							<em>no resume submitted</em>
						)}
					</Grid>
					<Grid item xs={12}>
						<Typography style={{ color: "grey" }} variant="h6">
							Leave a comment
						</Typography>
						<Comments candidate={data} />
					</Grid>
					<Grid />
				</Grid>
			)}
		</Grid>
	);
};

export default CandidateView;
