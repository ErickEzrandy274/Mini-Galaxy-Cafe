import React from "react";
import { toCapitalize } from "@utils";
import { InputProps } from "./interface";

const Input: React.FC<InputProps> = ({
	name,
	value,
	errorMsg,
	errTouched,
	handleChange,
	handleBlur,
}) => {
	return (
		<section className="flex flex-col gap-1">
			<label htmlFor={name} className="block text-gray-200">
				{toCapitalize(name)}
			</label>

			<input
				type={name}
				name={name}
				id={name}
				value={value}
				placeholder={`Write your ${name}`}
				className="block w-full px-4 py-2 border-2 border-gray-400 rounded-md 
				placeholder-gray-600 bg-gray-900 text-gray-300 focus:border-blue-500
				focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
				onChange={handleChange}
				onBlur={handleBlur}
			/>

			{errTouched && errorMsg && (
				<p className="text-red-600 text-sm px-2">{errorMsg}</p>
			)}
		</section>
	);
};

export default Input;
