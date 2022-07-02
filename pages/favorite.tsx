import React, { useEffect, useState } from "react";
import Loader from "../components/elements/Loader/Loader";
import FavoritePage from "../components/modules/FavoritePage/FavoritePage";
import { getData } from "../components/utils/function/dataManipulation";

const favorite = () => {
	const [foodData, setFoodData] = useState<any[]>([]);
	const [beveragesData, setBeveragesData] = useState<any[]>([]);
	const [snacksData, setSnacksData] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		getData({ type: "Foods", setData: setFoodData, setIsLoading });
		getData({ type: "Beverages", setData: setBeveragesData, setIsLoading });
		getData({ type: "Snacks", setData: setSnacksData, setIsLoading });
	}, []);

	return isLoading ? (
		<Loader />
	) : (
		<>
			<FavoritePage data={foodData} type="Foods" />
			<FavoritePage data={beveragesData} type="Beverages" />
			<FavoritePage data={snacksData} type="Snacks" />
		</>
	);
};

export default favorite;
