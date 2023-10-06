import Head from "next/head";
import React from "react";
import { BASE_URL, getHeaders, setData } from "@utils";
import dynamic from "next/dynamic";
import axios from "axios";

export async function getServerSideProps() {
	try {
		const { data: rawData } = await axios.get(`${BASE_URL}Foods`, getHeaders);
		const data = setData(rawData.documents);

		return { props: { data } };
	} catch (error) {
		console.error("Error:", error);
	}
}

const food = ({ data }: any) => {
	const FoodsPage = dynamic(() => import("../components/modules/ProductPage"), { ssr: false });

	return (
		<>
			<Head>
				<title>Mini Galaxy Cafe | Food</title>
				<meta name="description" content="Mini Galaxy Cafe Foods Product" />
			</Head>
			<FoodsPage data={data} type="Foods" />
		</>
	);
};

export default food;
