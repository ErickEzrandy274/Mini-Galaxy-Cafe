import axios from "axios"

let typeX = ''

export const setType = (type: String) => {
    typeX = type === 'food' ? 'findFoodAll' : type === 'beverage' ? 'findBeverageAll' : 'findSnackAll'
}

export async function getData() {
    const { data } = await axios.get(`https://mini-galaxy-cafe.herokuapp.com/data/${typeX}`)

    return {
        props: { data }
    }
}