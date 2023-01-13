/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import React from "react";
import { fetchProducts } from "@utils";
import { ProductPage } from "@modules";
import { QueryClient, dehydrate, useQuery } from "react-query";

export async function getServerSideProps() {
	try {
		const queryClient = new QueryClient();
		await queryClient.prefetchQuery(["Foods"], () => fetchProducts("Foods"));

		return {
			props: {
				dehydratedState: dehydrate(queryClient),
			},
		};
	} catch (error) {
		console.error("Error:", error);
	}
}

const food = () => {
	const { data } = useQuery("Foods", () => fetchProducts("Foods"), {
		staleTime: Infinity,
		cacheTime: Infinity,
	});

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
