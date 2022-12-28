// reference google icon: https://iconscout.com/icons/google
import React from "react";
import { useAuth } from "../../../context/AuthContext";
import { useRouter } from "next/router";
import IconGoogle from "../Icon/IconGoogle";
import IconFacebook from "../Icon/IconFacebook";

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
				<IconGoogle handler={handleLoginWithOtherProviders} isGoogle />
				<IconFacebook handler={handleLoginWithOtherProviders} />
			</div>
		</React.Fragment>
	);
};

export default QuickAccess;
