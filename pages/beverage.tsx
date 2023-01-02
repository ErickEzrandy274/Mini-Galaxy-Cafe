import Head from "next/head";
import React from "react";
import { BASE_URL, getHeaders } from "../components/utils/api";
import { setData } from "../components/utils/function/dataManipulation";
import { ProductPage } from "../components/modules";

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
				<meta name="description" content="Mini Galaxy Cafe Beverages Product" />
			</Head>
			<ProductPage data={data} type="Beverages" />
		</>
	);
};

export default beverage;
