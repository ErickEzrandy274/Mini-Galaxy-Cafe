import React from "react";
import MainLayout from "../components/modules/MainLayout/MainLayout";
import ProductPage from "../components/modules/ProductPage/ProductPage";
import { getData, setType } from "../components/utils/function/function";
import { dataProps } from "./api/hello";

setType('snack')

const snack: React.FC<dataProps> = ({ data }) => {
	return (
        <MainLayout>
          <ProductPage data={data} type='Snacks' />
        </MainLayout>
    )
};

export const getServerSideProps = getData

export default snack;
