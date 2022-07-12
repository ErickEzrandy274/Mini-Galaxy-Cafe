/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import PrimaryLoader from "../components/elements/Loader/PrimaryLoader";
import CheckOut from "../components/modules/CheckOut/CheckOut";
import { getBuyerProduct } from "../components/utils/function/dataManipulation";
import { useAuth } from "../context/AuthContext";

const checkout = () => {
	const { user: { uid }, } = useAuth();
	const [data, setData] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		setIsLoading(true)
		const fetchData = async () => {
			const { buyerProduct } = await getBuyerProduct(uid);
			setData(buyerProduct);
		};

		fetchData();
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, [uid]);

	return isLoading ? <PrimaryLoader /> : <CheckOut data={data} />;
};

export default checkout;
