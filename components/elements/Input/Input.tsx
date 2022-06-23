import React from "react";
import { InputProps } from "./interface";

const Input: React.FC<InputProps> = ({ name, handleChange }) => {

	return (
		<>
			<label
				htmlFor={name}
				className="block mb-2 text-gray-600 dark:text-gray-200"
			>
                {name.substring(0, 1).toUpperCase() + name.substring(1)}
			</label>
			<input
				onChange={handleChange}
				type={name}
				name={name}
				id={name}
				placeholder={`Write your ${name}`}
				className="block w-full px-4 py-2 mt-2 border-2 border-gray-400 rounded-md placeholder-gray-600 bg-gray-900 text-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
			/>
		</>
	);
};

export default Input;
