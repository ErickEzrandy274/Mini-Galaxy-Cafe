import Head from "next/head";
import React from "react";
import ProductPage from "../components/modules/ProductPage/ProductPage";
import { BASE_URL, getHeaders } from "../components/utils/api";
import { setData } from "../components/utils/function/dataManipulation";

export async function getServerSideProps() {
	try {
		const response = await fetch(`${BASE_URL}Foods`, getHeaders);

		const { documents } = await response.json();
		const data = setData(documents);

		return { props: { data } };
	} catch (error) {
		console.error("Error:", error);
	}
}

const food = ({ data }: any) => {
	return (
		<>
			<Head>
				<title>Mini Galaxy Cafe | Food</title>
			</Head>
			<ProductPage data={data} type="Foods" />
		</>
	);
};

export default food;
