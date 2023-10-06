import Head from "next/head";
import React from "react";
import { getBuyerData } from "@utils";
import { CheckOutProps } from "@modules";
import dynamic from "next/dynamic";

const checkout = ({ data }: CheckOutProps) => {
	const CheckOutPage = dynamic(() => import("../components/modules/CheckOut"), { ssr: false });

	return (
		<>
			<Head>
				<title>Mini Galaxy Cafe | Checkout</title>
				<meta name="description" content="Mini Galaxy Cafe Product Checkout" />
			</Head>
			<CheckOutPage data={data} />
		</>
	);
};

export default checkout;

export const getServerSideProps = getBuyerData;
