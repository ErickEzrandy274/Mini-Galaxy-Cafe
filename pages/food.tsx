import React from "react";
import ProductPage from "../components/modules/ProductPage/ProductPage";
import { getData, setType } from "../components/utils/function/function";
import { dataProps } from "./api/hello";

setType("food");

const food: React.FC<dataProps> = ({ data }) => {
	return <ProductPage data={data} type="Foods" />;
};

export const getServerSideProps = getData;

export default food;
