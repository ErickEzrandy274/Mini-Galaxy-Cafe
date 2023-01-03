import React from "react";
import { FavContextProvider } from "../../../context";
import { FavCardProps } from "@elements";
import FavoriteWrapper from "./FavoriteWrapper";

const FavoritePage: React.FC<FavCardProps> = ({ data }) => {
	return (
		<FavContextProvider>
			<FavoriteWrapper data={data} />
		</FavContextProvider>
	);
};

export default FavoritePage;
