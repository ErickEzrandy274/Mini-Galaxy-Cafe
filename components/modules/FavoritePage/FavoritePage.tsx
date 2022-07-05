import React from "react";
import { FavContextProvider } from "../../../context/FavContext";
import FavoriteWrapper from "./FavoriteWrapper";

const FavoritePage: React.FC<{ data: any }> = ({ data }) => {
	return (
		<FavContextProvider>
			<FavoriteWrapper data={data} />
		</FavContextProvider>
	);
};

export default FavoritePage;
