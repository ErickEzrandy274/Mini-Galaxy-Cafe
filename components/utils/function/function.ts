import {
	LoginInputType,
	TypeForm,
} from "../../modules/Authentication/interface";

export interface DisabilityButtonParamType extends TypeForm, LoginInputType {
	nickname?: string;
}

export type FeedbackType = {
	type: "email" | "password" | "nickname";
	disable: boolean;
	message: string;
};

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

export const checkDisabilityButton = (item: DisabilityButtonParamType): FeedbackType[] => {
	let feedback: FeedbackType[] = [];

	const { email, password } = item;
	feedback.push(checkPassword(password));
	feedback.push(checkEmail(email));
	feedback.push(checkNickName(item));

	return feedback;
};

const checkPassword = (password: string): FeedbackType => {
	// Taken from https://stackoverflow.com/questions/19605150/passwordRegex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
	// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
	const passwordRegex: RegExp =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!(+-~)%*^?&])[A-Za-z\d@#$!(+-~)%*^?&]{8,}$/;
	let newFeedback: FeedbackType = {
		type: "password",
		disable: false,
		message: "",
	};

	if (password.length > 0 && !passwordRegex.test(password)) {
		newFeedback = {
			...newFeedback,
			disable: true,
			message: `Password minimal mengandung delapan karakter, 
				setidaknya satu huruf besar, satu huruf kecil,
					satu angka, dan satu karakter khusus!`,
		};
	}
	return newFeedback;
};

const checkEmail = (email: string): FeedbackType => {
	// Taken from https://www.w3resource.com/javascript/form/email-validation.php
	const emailRegex: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	let newFeedback: FeedbackType = {
		type: "email",
		disable: false,
		message: "",
	};

	if (email.length > 0 && !emailRegex.test(email)) {
		newFeedback = {
			type: "email",
			disable: true,
			message: `Email Anda tidak valid!`,
		};
	}
	return newFeedback;
};

const checkNickName = (item: DisabilityButtonParamType): FeedbackType => {
	const { typeForm } = item;

	const nicknameRegex: RegExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
	let newFeedback: FeedbackType = {
		type: "nickname",
		disable: false,
		message: "",
	};

	if (typeForm === "Register") {
		if (item.nickname !== undefined && item.nickname.length > 0 && !nicknameRegex.test(item.nickname)) {
			newFeedback = {
				type: "nickname",
				disable: true,
				message: `Nickname Anda tidak valid!`,
			};
		}
	}
	return newFeedback;
};
