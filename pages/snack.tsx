import React from "react";
import ProductPage from "../components/modules/ProductPage/ProductPage";
import { getData, setType } from "../components/utils/function/function";
import { dataProps } from "./api/hello";

setType("snack");

const snack: React.FC<dataProps> = ({ data }) => {
	return <ProductPage data={data} type="Snacks" />;
};

export const getServerSideProps = getData;

export default snack;
