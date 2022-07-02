import React from "react";
import { LandingPageProps } from "../ProductPage/interface";
import { FavContextProvider } from "../../../context/FavContext";
import FavoriteWrapper from "./FavoriteWrapper";

const FavoritePage: React.FC<LandingPageProps> = ({ data, type }) => {
	return (
		<FavContextProvider>
			<FavoriteWrapper data={data} type={type} />
		</FavContextProvider>
	);
};

export default FavoritePage;
