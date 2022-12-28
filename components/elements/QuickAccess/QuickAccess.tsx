// reference google icon: https://iconscout.com/icons/google
import Image from "next/image";
import React from "react";
import { useAuth } from "../../../context/AuthContext";
import { useRouter } from "next/router";

const QuickAccess = () => {
	const { push } = useRouter();
	const { loginWithOtherProviders } = useAuth();

	const handleLoginWithOtherProviders = async (e: any, isGoogle = false) => {
		e.preventDefault();
		await loginWithOtherProviders(isGoogle);
		push("/menu");
	};

	return (
		<React.Fragment>
			<div className="flex items-center justify-between my-3">
				<span className="w-1/5 border-b-4 border-gray-500 md:w-1/4"></span>

				<div className="text-sm text-gray-400 tracking-wide	">QUICK ACCESS</div>

				<span className="w-1/5 border-b-4 border-gray-500 md:w-1/4"></span>
			</div>

			<div className="flex justify-evenly items-center px-6 md:px-12">
				<Image
					onClick={(e) => handleLoginWithOtherProviders(e, true)}
					src="/google-icon.svg"
					alt="google-icon"
					width={45}
					height={45}
					className="cursor-pointer hover:opacity-75"
				/>

				<Image
					onClick={handleLoginWithOtherProviders}
					src="/facebook-icon.svg"
					alt="facebook-icon"
					width={45}
					height={45}
					className="cursor-pointer hover:opacity-75"
				/>
			</div>
		</React.Fragment>
	);
};

export default QuickAccess;
