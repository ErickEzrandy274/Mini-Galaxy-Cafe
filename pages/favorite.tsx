/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import PrimaryLoader from "../components/elements/Loader/PrimaryLoader";
import FavoritePage from "../components/modules/FavoritePage/FavoritePage";
import { getFavData } from "../components/utils/function/dataManipulation";
import { useAuth } from "../context/AuthContext";

const favorite = () => {
	const { user: { uid } } = useAuth();
	const [data, setData] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		setIsLoading(true)
		const fetchData = async () => {
			const res = await getFavData(uid);
			setData(res);
		};

		fetchData();
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, [uid]);

	return isLoading ? <PrimaryLoader /> : <FavoritePage data={data} />;
};

export default favorite;
