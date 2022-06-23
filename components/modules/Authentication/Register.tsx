import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { extractError } from "../../utils/function/function";
import { RegisterInputType } from "./interface";

const Register = () => {
	const { user, register } = useAuth();
	const router = useRouter();
	const [error, setError] = useState<any>(null);
	const [data, setData] = useState<RegisterInputType>({
		email: "",
		password: "",
		nickname: "",
	});

	const handleChange = (e: any) => {
		const target = e.target;
		const name = target.name;
		const value = target.value;

		setData({
			...data,
			[name]: value,
		});
	};

	const handleRegister = async (e: any) => {
		e.preventDefault();

		try {
			await register(data.email, data.password, data.nickname);
			router.push("/");
		} catch (err: any) {
			setError(extractError(err));
		}
	};

	useEffect(() => {
		if (user) {
			router.push("/");
		}

		if (error) {
			setTimeout(() => {
				setData({
					email: "",
					password: "",
					nickname: "",
				});
				setError(null);
			}, 1500);
		}
	}, [user, error]);

	return (
		<div className="bg-gray-900 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-4 sm:mx-auto rounded-lg">
			<div className="flex justify-center lg:h-[35rem] rounded-lg">
				<div className="hidden bg-cover lg:block lg:w-2/3 bg-[url('../public/Chan-Walrus.jpg')] rounded-l-lg">
					<div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40 rounded-l-lg">
						<div>
							<h2 className="text-4xl font-bold text-white">
								Mini Galaxy Cafe
							</h2>

							<p className="max-w-xl mt-3 text-gray-300">
								Mini Galaxy Cafe was built in a modern style so
								that the younger generation can use this cafe as
								a place to study, hang out, and refresh. In
								addition, this cafe provides a variety of
								delicious food, drinks and snacks. Want to order
								our dishes? Immediately log in to your account!
							</p>
						</div>
					</div>
				</div>

				<div className="flex items-center w-full max-w-md p-6 mx-auto lg:w-2/6 font-semibold">
					<div className="flex-1">
						<div className="text-center">
							<h2 className="text-4xl font-bold text-center text-white">
								Mini Galaxy Cafe
							</h2>

							<p className="mt-3 text-gray-300">
								Register now if you don&#x27;t have an account!
							</p>
						</div>

						<div className="mt-8">
							<form onSubmit={handleRegister}>
								<div>
									<label
										htmlFor="nickname"
										className="block mb-2 text-gray-200"
									>
										Nickname
									</label>
									<input
										onChange={handleChange}
										type="text"
										name="nickname"
										id="nickname"
										placeholder="Write your nickname"
										className="block w-full px-4 py-2 mt-2 border-2 border-gray-400 rounded-md placeholder-gray-600 bg-gray-900 text-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
									/>
								</div>
								<div className="mt-6">
									<label
										htmlFor="email"
										className="block mb-2 text-gray-600 dark:text-gray-200"
									>
										Email
									</label>
									<input
										onChange={handleChange}
										type="email"
										name="email"
										id="email"
										placeholder="Write your email"
										className="block w-full px-4 py-2 mt-2 border-2 border-gray-400 rounded-md placeholder-gray-600 bg-gray-900 text-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
									/>
								</div>

								<div className="mt-6">
									<label
										htmlFor="password"
										className="block mb-2 text-gray-600 dark:text-gray-200"
									>
										Password
									</label>
									<input
										onChange={handleChange}
										type="password"
										name="password"
										id="password"
										placeholder="Write your password"
										className="block w-full px-4 py-2 mt-2 border-2 border-gray-400 rounded-md placeholder-gray-600 bg-gray-900 text-gray-300 dark:focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
									/>
								</div>

								<div className="mt-6">
									<button className="font-semibold w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
										REGISTER
									</button>
								</div>
							</form>

							<p className="mt-6 text-sm text-center text-gray-400">
								Already have an account?{" "}
								<a
									href="/login"
									className="text-blue-500 focus:outline-none focus:underline hover:underline"
								>
									Login here
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
