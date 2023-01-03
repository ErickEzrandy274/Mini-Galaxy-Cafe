import Head from "next/head";
import React from "react";
import { BASE_URL, getHeaders, setData } from "../components/utils";
import { ProductPage } from "../components/modules";

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
				<meta name="description" content="Mini Galaxy Cafe Snacks Product" />
			</Head>
			<ProductPage data={data} type="Snacks" />
		</>
	);
};

export default snack;
