import React from "react";
import FoodPage from "../components/modules/FoodPage/FoodPage";
import MainLayout from "../components/modules/MainLayout/MainLayout";
import { getData, setType } from "../components/utils/function";
import { dataProps } from "./api/hello";

setType('food')

const food: React.FC<dataProps> = ({ data }) => {
    return (
        <MainLayout>
          <FoodPage data={data} />
        </MainLayout>
    )
};

export const getServerSideProps = getData

export default food;