import React from "react";
import ProductPage from "../components/modules/ProductPage/ProductPage";
import MainLayout from "../components/modules/MainLayout/MainLayout";
import { getData, setType } from "../components/utils/function/function";
import { dataProps } from "./api/hello";

setType('food')

const food: React.FC<dataProps> = ({ data }) => {
    return (
        <MainLayout>
          <ProductPage data={data} type='Foods' />
        </MainLayout>
    )
};

export const getServerSideProps = getData

export default food;