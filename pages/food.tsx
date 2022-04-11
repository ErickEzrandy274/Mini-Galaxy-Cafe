import axios from "axios";
import React from "react";
import FoodPage from "../components/modules/FoodPage/FoodPage";

export async function getStaticProps() {
    const { data } = await axios.get("https://mini-galaxy-cafe.herokuapp.com/data/findFoodAll")

    return {
      props: {
        data,
      }
    }
}

const food = ({data}:{data:any}) => {
    return <FoodPage data={data} />;
};

export default food;
