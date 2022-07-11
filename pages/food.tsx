import React, { useEffect, useState } from "react";
import PrimaryLoader from "../components/elements/Loader/PrimaryLoader";
import ProductPage from "../components/modules/ProductPage/ProductPage";
import { getData } from "../components/utils/function/dataManipulation";
import { reloadWarning } from "../components/utils/function/function";

const food = () => {
	const [data, setData] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		getData({ type: "Foods", setData, setIsLoading });
		reloadWarning()
	}, []);

	return isLoading ? <PrimaryLoader /> : <ProductPage data={data} type="Foods" />;
};

export default food;
