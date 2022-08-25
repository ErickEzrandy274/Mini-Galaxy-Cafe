/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import React, { useEffect } from "react";
import ProductPage from "../components/modules/ProductPage/ProductPage";
import { BASE_URL, getHeaders } from "../components/utils/api";
import { setData } from "../components/utils/function/dataManipulation";
import { reloadWarning } from "../components/utils/function/function";

export async function getServerSideProps() {
	try {
		const response = await fetch(`${BASE_URL}Snacks`, getHeaders);

		const { documents } = await response.json();
		const data = setData(documents);

		return { props: { data } };
	} catch (error) {
		console.error("Error:", error);
	}
}

const snack = ({ data }: any) => {
	useEffect(() => {
		reloadWarning();
	}, []);

	return (
		<>
			<Head>
				<title>Mini Galaxy Cafe | Snack</title>
			</Head>
			<ProductPage data={data} type="Snacks" />
		</>
	);
};

export default snack;
