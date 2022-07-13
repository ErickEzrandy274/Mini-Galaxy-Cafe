/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import React, { useEffect, useState } from "react";
import PrimaryLoader from "../components/elements/Loader/PrimaryLoader";
import ProductPage from "../components/modules/ProductPage/ProductPage";
import { getData } from "../components/utils/function/dataManipulation";

const food = () => {
	const [data, setData] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		getData({ type: "Foods", setData, setIsLoading });
	}, []);

	return (
		<>
			<Head>
				<title>Mini Galaxy Cafe | Food</title>
			</Head>
			{isLoading ? (
				<PrimaryLoader />
			) : (
				<ProductPage data={data} type="Foods" />
			)}
		</>
	);
};

export default food;
