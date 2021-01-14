import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar";
import { getCandidateById } from "../../redux/actions";
// view
import CandidateView from "./view";

const Candidate = ({ view = false, match }) => {
	const dispatch = useDispatch();
	const [fetched, setFetched] = useState(false);

	// select selected from store ( loading, error, data )
	const { loading, data } = useSelector((state) => state?.selected || {});

	// get all candidates
	useEffect(() => {
		if (!loading & !fetched) {
			dispatch(getCandidateById(match?.params?.id || 0));
			setFetched(true);
		}
	}, [dispatch, data, loading, fetched, match]);

	return (
		<div style={{ paddingTop: "80px" }}>
			{view && (
				<Fragment>
					<Navbar is_show_back={true} />
					<CandidateView loading={loading} data={data || []} />
				</Fragment>
			)}
		</div>
	);
};

export default Candidate;
