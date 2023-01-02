import React, { BaseSyntheticEvent } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useRouter } from "next/router";
import { IconFacebook, IconGithub, IconGoogle, ProviderType } from "../Icon";

const QuickAccess = () => {
	const { push } = useRouter();
	const { loginWithOtherProviders } = useAuth();

	const handleLoginWithOtherProviders = async (
		e: BaseSyntheticEvent,
		provider: ProviderType
	) => {
		e.preventDefault();
		await loginWithOtherProviders(provider);
		push("/menu");
	};

	return (
		<React.Fragment>
			<div className="flex items-center justify-between my-3">
				<span className="w-1/5 border-b-4 border-gray-500 md:w-1/4"></span>

				<div className="text-sm text-gray-400 tracking-wide	">QUICK ACCESS</div>

				<span className="w-1/5 border-b-4 border-gray-500 md:w-1/4"></span>
			</div>

			<div className="flex justify-between items-center px-6 md:px-12">
				<IconGoogle handler={handleLoginWithOtherProviders} provider="Google" />
				<IconFacebook
					handler={handleLoginWithOtherProviders}
					provider="Facebook"
				/>
				<IconGithub handler={handleLoginWithOtherProviders} provider="Github" />
			</div>
		</React.Fragment>
	);
};

export default QuickAccess;
