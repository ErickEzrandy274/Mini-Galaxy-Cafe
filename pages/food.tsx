import Head from "next/head";
import React from "react";
import { BASE_URL, getHeaders, setData } from "@utils";
import { ProductPage } from "@modules";

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
				<meta name="description" content="Mini Galaxy Cafe Foods Product" />
			</Head>
			<ProductPage data={data} type="Foods" />
		</>
	);
};

export default food;
