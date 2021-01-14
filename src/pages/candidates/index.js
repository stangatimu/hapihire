import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCandidates } from "../../redux/actions";

const Candidates = () => {
	const dispatch = useDispatch();
	const [fetched, setFetched] = useState(false);

	// select candidate from store ( loading, error, data )
	const { loading, data } = useSelector((state) => state?.candidates || {});

	// get all candidates
	useEffect(() => {
		if (!data?.length && !loading & !fetched) {
			dispatch(getCandidates());
			setFetched(true);
		}
	}, [dispatch, data, loading, fetched]);

	return <div style={{ paddingTop: "80px" }}></div>;
};

export default Candidates;
