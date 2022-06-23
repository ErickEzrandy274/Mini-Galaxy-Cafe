import React from "react";

const Login = () => {
	return (
		<div className="bg-white dark:bg-gray-900 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-4 sm:mx-auto rounded-lg">
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

				<div className="flex items-center w-full max-w-md p-6 mx-auto lg:w-2/6">
					<div className="flex-1">
						<div className="text-center">
							<h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
								Mini Galaxy Cafe
							</h2>

							<p className="mt-3 text-gray-500 dark:text-gray-300">
								Sign in to access your account
							</p>
						</div>

						<div className="mt-8">
							<form>
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
									>
										Email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										placeholder="Write your email"
										className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
									/>
								</div>

								<div className="mt-6">
									<label
										htmlFor="password"
										className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
									>
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="Write your Password"
										className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
									/>
								</div>

								<div className="mt-6">
									<button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
										Log in
									</button>
								</div>
							</form>

							<p className="mt-6 text-sm text-center text-gray-400">
								Don&#x27;t have an account yet?{" "}
								<a
									href="#"
									className="text-blue-500 focus:outline-none focus:underline hover:underline"
								>
									Register here
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
