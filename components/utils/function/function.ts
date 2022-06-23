import axios from "axios";
import { LoginInputType, TypeForm } from "../../modules/Authentication/interface";

export interface DisabilityButtonParamType extends TypeForm, LoginInputType {
	nickname?: string
}

export interface FeedbackType {
	disable: boolean, message: string
}

let typeX = "";

export const setType = (type: String) => {
	typeX =
		type === "food"
			? "findFoodAll"
			: type === "beverage"
			? "findBeverageAll"
			: "findSnackAll";
};

export async function getData() {
	const { data } = await axios.get(
		`https://mini-galaxy-cafe.herokuapp.com/data/${typeX}`
	);

	return {
		props: { data },
	};
}

export const extractError = (err: any) => {
	const { code } = err;
	const newError = code.substring(5).split("-");
	newError[0] =
		newError[0].substring(0, 1).toUpperCase() + newError[0].substring(1);
	return newError.join(" ");
};

export const toCapitalize = (text: string) => {
	return text.substring(0, 1).toUpperCase() + text.substring(1);
};

export const checkDisabilityButton = (item: DisabilityButtonParamType) => {
	const feedback: FeedbackType = {
		disable: false,
		message: ""
	}
	// Taken from https://stackoverflow.com/questions/19605150/passwordRegex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
	// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
	const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
	// Taken from https://www.w3resource.com/javascript/form/email-validation.php
	const emailRegex: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

	const nicknameRegex: RegExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/

	const { typeForm, email, password } = item
	if (!passwordRegex.test(password)) {
		return {...feedback, disable: true, message: "Password minimal mengandung delapan karakter, setidaknya satu huruf besar, satu huruf kecil, satu angka, dan satu karakter khusus!"}
	} 

	if (!emailRegex.test(email) {
		return {...feedback, disable: true, message: "Email Anda tidak valid!"}
	}

	if (typeForm === "Register") {
		if (item.nickname !== undefined && !nicknameRegex.test(item.nickname)) {
			return {...feedback, disable: true, message: "Nickname Anda tidak valid!"}
		}
	}

	return feedback
	
}
