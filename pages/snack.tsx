import Head from "next/head";
import React from "react";
import { ProductPage } from "@modules";
import { fetchProducts } from "@utils";
import { QueryClient, dehydrate, useQuery } from "react-query";

export async function getServerSideProps() {
	try {
		const queryClient = new QueryClient();
		await queryClient.prefetchQuery(["Snacks"], () => fetchProducts("Snacks"));

		return {
			props: {
				dehydratedState: dehydrate(queryClient),
			},
		};
	} catch (error) {
		console.error("Error:", error);
	}
}

const snack = () => {
	const { data } = useQuery("Snacks", () => fetchProducts("Snacks"), {
		staleTime: Infinity,
		cacheTime: Infinity,
	});

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
