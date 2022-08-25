/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import React, { useEffect } from "react";
import ProductPage from "../components/modules/ProductPage/ProductPage";
import { BASE_URL, getHeaders } from "../components/utils/api";
import { setData } from "../components/utils/function/dataManipulation";
import { reloadWarning } from "../components/utils/function/function";

export async function getServerSideProps() {
	try {
		const response = await fetch(`${BASE_URL}Beverages`, getHeaders);

		const { documents } = await response.json();
		const data = setData(documents);

		return { props: { data } };
	} catch (error) {
		console.error("Error:", error);
	}
}

const beverage = ({ data }: any) => {
	return (
		<>
			<Head>
				<title>Mini Galaxy Cafe | Beverage</title>
			</Head>
			<ProductPage data={data} type="Beverages" />
		</>
	);
};

export default beverage;
