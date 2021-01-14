import {
	Avatar,
	Button,
	Divider,
	Grid,
	TextField,
	Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const Comments = ({ candidate = [] }) => {
	const [comment_text, setCommentText] = useState({
		text: "",
		recruiter: "",
	});
	const onFormSubmit = (e) => {
		e.preventDefault();
		// dispat update action
	};
	return (
		<Grid container item xs={13}>
			<form style={{ width: "100%" }}>
				<TextField
					placeholder="Your comment here..."
					multiline
					fullWidth
					rows={2}
					rowsMax={6}
					variant="outlined"
					value={comment_text.text}
					onChange={(e) =>
						setCommentText({
							text: e.target.value,
							...comment_text,
						})
					}
				/>
				<br />
				<TextField
					placeholder="Recruiter name"
					label="Recruiter"
					multiline
					fullWidth
					variant="outlined"
					value={comment_text.recruiter}
					margin="dense"
					onChange={(e) =>
						setCommentText({
							recruiter: e.target.value,
							...comment_text,
						})
					}
				/>
				<Grid
					style={{ margin: "5px 0" }}
					item
					xs={12}
					container
					direction="row"
					justify="flex-end"
				>
					<Button
						type="submit"
						size="small"
						variant="contained"
						color="primary"
						disabled={!comment_text}
					>
						Save
					</Button>
				</Grid>
			</form>
			{candidate.comments?.map((com) => (
				<Grid item xs={12}>
					<Grid container alignItems="center">
						<Avatar>{com.recruiter[0]}</Avatar>
						<Typography color="primary" style={{ margin: "10px" }}>
							{com.recruiter}
						</Typography>
					</Grid>
					<Divider />
					<Typography style={{ margin: "5px", marginLeft: "50px" }}>
						{com.text}
					</Typography>
				</Grid>
			))}
		</Grid>
	);
};

export default Comments;
