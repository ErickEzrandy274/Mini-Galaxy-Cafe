/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import React from "react";
import CheckOut from "../components/modules/CheckOut/CheckOut";
import { getBuyerData } from "../components/utils/function/SSRFunction";

const checkout = ({ data }: any) => {
	const newData = data ? data.buyerProduct : [];

	return (
		<>
			<Head>
				<title>Mini Galaxy Cafe | Checkout</title>
			</Head>
			<CheckOut data={newData} />
		</>
	);
};

export default checkout;

export const getServerSideProps = getBuyerData;