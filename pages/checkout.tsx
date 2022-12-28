import Head from "next/head";
import React from "react";
import CheckOut from "../components/modules/CheckOut";
import { getBuyerData } from "../components/utils/function/SSRFunction";

const checkout = ({ data }: any) => {
	const newData = data ? data.buyerProduct : [];

	return (
		<>
			<Head>
				<title>Mini Galaxy Cafe | Checkout</title>
				<meta name="description" content="Mini Galaxy Cafe Product Checkout" />
			</Head>
			<CheckOut data={newData} />
		</>
	);
};

export default checkout;

export const getServerSideProps = getBuyerData;
