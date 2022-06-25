import React, { useEffect, useState } from "react";
import Loader from "../components/elements/Loader/Loader";
import ProductPage from "../components/modules/ProductPage/ProductPage";
import { getData } from "../components/utils/function/dataManipulation";

const food = () => {
	const [data, setData] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		getData({ type: "Foods", setData, setIsLoading });
	}, []);

	return isLoading ? <Loader /> : <ProductPage data={data} type="Foods" />;
};

export default food;
