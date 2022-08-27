/* eslint-disable react-hooks/rules-of-hooks */
import type { NextPage } from "next";
import { useEffect } from "react";
import LandingPage from "../components/modules/Landing Page/LandingPage";
import { reloadWarning } from "../components/utils/function/function";

const landing: NextPage = () => {
	useEffect(() => {
		reloadWarning();
	});

	return <LandingPage />;
};

export default landing;
