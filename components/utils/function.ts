import axios from "axios"
import { GetServerSidePropsContext } from "next"

let typeX = ''

export const setType = (type: String) => {
    typeX = type === 'food' ? 'findFoodAll' : type === 'beverage' ? 'findBeverageAll' : 'findSnackAll'
}

export async function getData(ctx: GetServerSidePropsContext) {
    console.log(ctx.query)
    const { data } = await axios.get(`https://mini-galaxy-cafe.herokuapp.com/data/${typeX}`)

    return {
        props: { data }
    }
}