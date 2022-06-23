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

export const extractError = (err: any) => {
	const { code } = err;
	const newError = code.substring(5).split("-");
	newError[0] =
		newError[0].substring(0, 1).toUpperCase() + newError[0].substring(1);
	return newError.join(" ");
};