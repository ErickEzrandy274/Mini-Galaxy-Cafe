import axios from "axios"

export async function getFoodData() {
    const { data } = await axios.get("https://mini-galaxy-cafe.herokuapp.com/data/findFoodAll")

    return {
        props: { data }
    }
}