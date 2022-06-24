import React from "react";
import ProductPage from "../components/modules/ProductPage/ProductPage";
import { getData, setType } from "../components/utils/function/function";
import { dataProps } from "./api/hello";

setType("beverage");

const beverage: React.FC<dataProps> = ({ data }) => {
	return <ProductPage data={data} type="Beverages" />;
};

export const getServerSideProps = getData;

export default beverage;
