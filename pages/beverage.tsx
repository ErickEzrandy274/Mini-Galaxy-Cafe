/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import React from "react";
import { fetchProducts } from "@utils";
import { ProductPage } from "@modules";
import { QueryClient, dehydrate, useQuery } from "react-query";

export async function getServerSideProps() {
	try {
		const queryClient = new QueryClient();
		await queryClient.prefetchQuery(["Beverages"], () =>
			fetchProducts("Beverages")
		);

		return {
			props: {
				dehydratedState: dehydrate(queryClient),
			},
		};
	} catch (error) {
		console.error("Error:", error);
	}
}

const beverage = () => {
	const { data } = useQuery("Beverages", () => fetchProducts("Beverages"), {
		staleTime: Infinity,
		cacheTime: Infinity,
	});

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
