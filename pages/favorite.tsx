import Head from "next/head";
import React from "react";
import { getFavoriteData } from "../components/utils";
import { FavoritePage } from "../components/modules";
import { FavCardProps } from "../components/elements";

const favorite = ({ data }: FavCardProps) => {
	return (
		<>
			<Head>
				<title>Mini Galaxy Cafe | Favorite</title>
				<meta
					name="description"
					content="Mini Galaxy Cafe User Favorite Product"
				/>
			</Head>
			<FavoritePage data={data} />
		</>
	);
};

export default favorite;

export const getServerSideProps = getFavoriteData;
