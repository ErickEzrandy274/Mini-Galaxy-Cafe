import React, { useEffect, useState } from "react";
import Loader from "../components/elements/Loader/Loader";
import ProductPage from "../components/modules/ProductPage/ProductPage";
import { getData } from "../components/utils/function/dataManipulation";

const snack = () => {
	const [data, setData] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		getData({ type: "Snacks", setData, setIsLoading });
	}, []);

	return isLoading ? <Loader /> : <ProductPage data={data} type="Snacks" />;
};


export default snack;
