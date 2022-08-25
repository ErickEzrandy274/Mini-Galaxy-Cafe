/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import React from "react";
import ProductPage from "../components/modules/ProductPage/ProductPage";
import { BASE_URL, getHeaders } from "../components/utils/api";
import { setData } from "../components/utils/function/dataManipulation";

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
