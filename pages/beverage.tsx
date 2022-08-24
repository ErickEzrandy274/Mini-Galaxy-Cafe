/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import React from "react";
import ProductPage from "../components/modules/ProductPage/ProductPage";
import { BASE_URL, getHeaders } from "../components/utils/api";

export async function getServerSideProps() {
	try {
		const response = await fetch(`${BASE_URL}Beverages`, getHeaders);

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

const beverage = ({ data }: any) => {
	return (
		<>
			<Head>
				<title>Mini Galaxy Cafe | Beverage</title>
			</Head>
			<ProductPage data={data} type="Beverages" />
		</>
	);
};

export default beverage;
