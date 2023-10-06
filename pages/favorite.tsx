import Head from "next/head";
import React from "react";
import { getFavoriteData } from "@utils";
import { FavCardProps } from "@elements";
import dynamic from "next/dynamic";

const favorite = ({ data }: FavCardProps) => {
	const FavoritePage = dynamic(() => import("../components/modules/FavoritePage"), { ssr: false });

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
