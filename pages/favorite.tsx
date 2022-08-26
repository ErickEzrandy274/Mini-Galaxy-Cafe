/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import React from "react";
import FavoritePage from "../components/modules/FavoritePage/FavoritePage";
import { getFavoriteData } from "../components/utils/function/SSRFunction";

const favorite = ({ data }: any) => {
	return (
		<>
			<Head>
				<title>Mini Galaxy Cafe | Favorite</title>
			</Head>
			<FavoritePage data={data} />
		</>
	);
};

export default favorite;

export const getServerSideProps = getFavoriteData;