import React from "react";
import { FavCardProps } from "@elements";
import { FavContextProvider } from "@utils";
import FavoriteWrapper from "./FavoriteWrapper";

const FavoritePage: React.FC<FavCardProps> = ({ data }) => {
	return (
		<FavContextProvider>
			<FavoriteWrapper data={data} />
		</FavContextProvider>
	);
};

export default FavoritePage;
