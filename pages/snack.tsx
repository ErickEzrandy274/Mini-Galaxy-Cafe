import Head from "next/head";
import React from "react";
import { BASE_URL, getHeaders, setData } from "@utils";
import dynamic from "next/dynamic";
import axios from "axios";

export async function getServerSideProps() {
	try {
		const { data: rawData } = await axios.get(`${BASE_URL}Snacks`, getHeaders);
		const data = setData(rawData.documents);

		return { props: { data } };
	} catch (error) {
		console.error("Error:", error);
	}
}

const snack = ({ data }: any) => {
	const SnacksPage = dynamic(() => import("../components/modules/ProductPage"));

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
