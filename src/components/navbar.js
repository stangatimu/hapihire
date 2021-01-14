import {
	AppBar,
	Grid,
	IconButton,
	Toolbar,
	Typography,
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ is_show_back = false }) => {
	return (
		<AppBar style={{ backgroundColor: "white" }} position="fixed">
			<Toolbar>
				<Grid container justify="space-between" direction="row">
					{is_show_back && (
						<Link
							style={{ textDecoration: "none" }}
							to="/candidates"
						>
							<IconButton
								aria-controls="simple-menu"
								aria-haspopup="true"
							>
								<ArrowBack />
							</IconButton>
						</Link>
					)}
					<Typography color="primary" variant="h4">
						<strong>HireList</strong>
					</Typography>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
