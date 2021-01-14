import {
	Avatar,
	Button,
	Divider,
	Grid,
	TextField,
	Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCandidate } from "../redux/actions";

const Comments = ({ candidate = [] }) => {
	const dispatch = useDispatch();
	// new comment data
	const [comment_text, setCommentText] = useState({
		text: "",
		recruiter: "",
	});

	// select candidate from store ( loading, error, data )
	const { loading } = useSelector((state) => state?.selected || {});

	// handle form cs submit
	const onFormSubmit = (e) => {
		e.preventDefault();
		let updated_candidate = {
			...candidate,
			comments: [comment_text, ...candidate.comments],
		};
		// dispatch update
		dispatch(updateCandidate(updated_candidate));
	};

	useEffect(() => {
		if (!loading) {
			setCommentText({
				text: "",
				recruiter: "",
			});
		}
	}, [loading]);
	return (
		<Grid container item xs={13}>
			<form onSubmit={onFormSubmit} style={{ width: "100%" }}>
				<TextField
					placeholder="Your comment here..."
					multiline
					fullWidth
					rows={2}
					rowsMax={6}
					required
					variant="outlined"
					value={comment_text.text}
					onChange={(e) =>
						setCommentText({
							...comment_text,
							text: e.target.value,
						})
					}
				/>
				<br />
				<TextField
					placeholder="Recruiter name"
					label="Recruiter"
					multiline
					fullWidth
					required
					variant="outlined"
					value={comment_text.recruiter}
					margin="dense"
					onChange={(e) =>
						setCommentText({
							...comment_text,
							recruiter: e.target.value,
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
					{
						<Button
							type="submit"
							size="small"
							variant="contained"
							color="primary"
							disabled={!comment_text.text || loading}
						>
							Save
						</Button>
					}
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
