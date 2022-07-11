import React, { useEffect, useState } from "react";
import Loader from "../components/elements/Loader/Loader";
import CheckOut from "../components/modules/CheckOut/CheckOut";
import { getBuyerProduct } from "../components/utils/function/dataManipulation";
import { reloadWarning } from "../components/utils/function/function";
import { useAuth } from "../context/AuthContext";

const checkout = () => {
	const {
		user: { uid },
	} = useAuth();
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

	return isLoading ? <Loader /> : <CheckOut data={data} />;
};

export default checkout;
