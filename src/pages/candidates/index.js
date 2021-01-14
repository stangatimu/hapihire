import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar";
import { getCandidates } from "../../redux/actions";
// view
import CandidatesView from "./view";

const Candidates = ({ view = false }) => {
	const dispatch = useDispatch();
	const [fetched, setFetched] = useState(false);

	// select candidate from store ( loading, error, data )
	const { loading, data } = useSelector((state) => state?.candidate || {});

	// get all candidates
	useEffect(() => {
		if (!data?.length && !loading & !fetched) {
			dispatch(getCandidates());
			setFetched(true);
		}
	}, [dispatch, data, loading, fetched]);

	return (
		<div style={{ paddingTop: "80px" }}>
			{view && (
				<Fragment>
					<Navbar />
					<CandidatesView loading={loading} data={data || []} />
				</Fragment>
			)}
		</div>
	);
};

export default Candidates;
