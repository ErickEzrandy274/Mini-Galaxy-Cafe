import React from "react";
import Alert from "../../elements/Alert/Alert";
import { BaseAuthProps } from "./interface";

const BaseAuth: React.FC<BaseAuthProps> = ({
	typeForm,
	children,
	error,
}) => {
	const subContent =
		typeForm === "Register"
			? `Register now if you don't have an account!`
			: `Login to access your account`;

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
								Mini Galaxy Cafe dibangun dengan gaya modern
								agar generasi muda dapat memanfaatkan kafe ini
								sebagai tempat belajar, hang out, dan
								refreshing. Selain itu, kafe ini menyediakan
								berbagai makanan, minuman, dan makanan ringan
								yang lezat. Ingin memesan masakan kami? Segera
								login ke akun Anda!
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

							<p className="my-3 text-gray-300">{subContent}</p>
						</div>

						{children}

						{error && <Alert error={error} bgColor="bg-red-600" />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BaseAuth;
