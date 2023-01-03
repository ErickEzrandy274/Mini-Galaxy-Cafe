import Head from "next/head";
import React from "react";
import { getBuyerData } from "../components/utils/function";
import { CheckOut, CheckOutProps } from "../components/modules";

const checkout = ({ data }: CheckOutProps) => {
	return (
		<>
			<Head>
				<title>Mini Galaxy Cafe | Checkout</title>
				<meta name="description" content="Mini Galaxy Cafe Product Checkout" />
			</Head>
			<CheckOut data={data} />
		</>
	);
};

export default checkout;

export const getServerSideProps = getBuyerData;
