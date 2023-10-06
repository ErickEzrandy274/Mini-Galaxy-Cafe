import Head from "next/head";
import React from "react";
import { BASE_URL, getHeaders, setData } from "@utils";
import dynamic from "next/dynamic";

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
	const BeveragesPage = dynamic(() => import("../components/modules/ProductPage"), { ssr: false });

	return (
		<>
			<Head>
				<title>Mini Galaxy Cafe | Beverage</title>
				<meta name="description" content="Mini Galaxy Cafe Beverages Product" />
			</Head>
			<BeveragesPage data={data} type="Beverages" />
		</>
	);
};

export default beverage;
