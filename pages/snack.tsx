import Head from "next/head";
import React from "react";
import { BASE_URL, getHeaders, setData } from "@utils";
import dynamic from "next/dynamic";

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
	const SnacksPage = dynamic(() => import("../components/modules/ProductPage"), { ssr: false });

	return (
		<>
			<Head>
				<title>Mini Galaxy Cafe | Snack</title>
				<meta name="description" content="Mini Galaxy Cafe Snacks Product" />
			</Head>
			<SnacksPage data={data} type="Snacks" />
		</>
	);
};

export default snack;
