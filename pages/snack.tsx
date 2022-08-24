/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import React from "react";
import ProductPage from "../components/modules/ProductPage/ProductPage";
import { BASE_URL, getHeaders } from "../components/utils/api";

export async function getServerSideProps() {
	try {
		const response = await fetch(`${BASE_URL}Snacks`, getHeaders);

		const json = await response.json();
		const data = json.map(({ _fieldsProto }: any) => {
			const { dataId, name, price, image } = _fieldsProto;
			return {
				dataId: dataId.stringValue,
				name: name.stringValue,
				price: price.integerValue,
				image: image.stringValue,
			};
		});

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
			</Head>
			<ProductPage data={data} type="Snacks" />
		</>
	);
};

export default snack;
