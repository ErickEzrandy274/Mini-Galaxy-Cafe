import React from "react";
import FoodPage from "../components/modules/FoodPage/FoodPage";
import MainLayout from "../components/modules/MainLayout/MainLayout";
import { getFoodData } from "../components/utils/function";
import { foodProps } from "./api/hello";

const food: React.FC<foodProps> = ({ data }) => {
    return (
        <MainLayout>
          <FoodPage data={data} />
        </MainLayout>
    )
};

export const getServerSideProps = getFoodData

export default food;