import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import Alert from "../../elements/Alert/Alert";
import { LoginInputType } from "./interface";

const Login = () => {
    const router = useRouter()
    const { user, login, error, setError } = useAuth()
	const [data, setData] = useState<LoginInputType>({
		email: "",
		password: "",
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

	const handleLogin = async (e: any) => {
		e.preventDefault();
		await login(data.email, data.password);
		router.push("/");
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
				})
				setError(null)
			}, 1200)
		}
	}, [user, error]);
    
	return (
		<div className="bg-gray-900 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-4 sm:mx-auto rounded-lg">
			<div className="flex justify-center lg:h-[37rem] rounded-lg">
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
								Login to access your account
							</p>
						</div>

						<div className="mt-8 ">
							<form onSubmit={handleLogin}>
								<div>
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
										LOGIN
									</button>
								</div>
							</form>

							<p className="mt-6 text-sm text-center text-gray-400">
								Don&#x27;t have an account yet?{" "}
								<a
									href="/register"
									className="text-blue-500 focus:outline-none focus:underline hover:underline"
								>
									Register here
								</a>
                            </p>
                            
                            {error && <Alert error={error} bgColor='bg-red-600' />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
