import { object, string } from "yup";

export const loginObj = {
	email: "",
	password: "",
};

export const registerObj = {
	...loginObj,
	nickname: "",
};

export const authInput = [
	{ name: "nickname", type: "Register" },
	{ name: "email", type: "ALL" },
	{ name: "password", type: "ALL" },
];

const authValidationSchema = {
	email: string()
		.email("Please write a valid email!")
		.required("Please write your email!")
		.matches(
			/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}\.?)$/,
			"Your email is not valid!"
		),
	password: string()
		.required("Please write your password!")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~`\-={}[\]:;"'<>,.?/])[A-Za-z\d!@#$%^&*()_+~`\-={}[\]:;"'<>,.?/]{10,}$/,
			"The password must contain minimal 10 characters with one uppercase, one lowercase, one number, and one special character!"
		),
};

export const loginValidationSchema = object({ ...authValidationSchema });

export const registerValidationSchema = object({
	...authValidationSchema,
	nickname: string()
		.required("Please write your nickname!")
		.matches(
			/^[a-zA-Z]{3,}( [a-zA-Z]+)*$/,
			"Your nickname must be only alphabet and at least 3 characters long!"
		),
});
