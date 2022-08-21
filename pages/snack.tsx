/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import React, { useEffect, useState } from "react";
import PrimaryLoader from "../components/elements/Loader/PrimaryLoader";
import ProductPage from "../components/modules/ProductPage/ProductPage";
import { getData } from "../components/utils/function/dataManipulation";

const snack = () => {
	const [data, setData] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		getData({ type: "Snacks", setData, setIsLoading });
	}, []);

	return (
		<>
			<Head>
				<title>Mini Galaxy Cafe | Snack</title>
			</Head>
			{isLoading ? (
				<PrimaryLoader />
			) : (
				<ProductPage data={data} type="Snacks" />
			)}
		</>
	);
};

export default snack;
