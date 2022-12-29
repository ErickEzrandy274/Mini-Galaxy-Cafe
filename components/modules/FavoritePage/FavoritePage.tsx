import React from "react";
import { FavContextProvider } from "../../../context/FavContext";
import { FavCardProps } from "../../elements/Button/interface";
import FavoriteWrapper from "./FavoriteWrapper";

const FavoritePage: React.FC<FavCardProps> = ({ data }) => {
	return (
		<FavContextProvider>
			<FavoriteWrapper data={data} />
		</FavContextProvider>
	);
};

export default FavoritePage;
