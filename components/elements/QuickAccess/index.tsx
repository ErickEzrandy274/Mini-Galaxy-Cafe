import React, { BaseSyntheticEvent, useCallback } from "react";
import { useAuth } from "@utils";
import { IconFacebook, IconGithub, IconGoogle, ProviderType } from "@elements";
import Router from "next/router";

const QuickAccess = () => {
	const { loginWithOtherProviders } = useAuth();

	const handleLoginWithOtherProviders = useCallback(
		async (e: BaseSyntheticEvent, provider: ProviderType) => {
			e.preventDefault();
			await loginWithOtherProviders(provider);
			Router.push("/menu");
		},
		[loginWithOtherProviders]
	);

	return (
		<React.Fragment>
			<section className="flex items-center justify-between my-3">
				<span className="w-1/5 border-b-4 border-gray-500 md:w-1/4"></span>

				<h3 className="text-sm text-gray-400 tracking-wide	">QUICK ACCESS</h3>

				<span className="w-1/5 border-b-4 border-gray-500 md:w-1/4"></span>
			</section>

			<section className="flex justify-between items-center px-6 md:px-12">
				<IconGoogle handler={handleLoginWithOtherProviders} provider="Google" />
				<IconFacebook
					handler={handleLoginWithOtherProviders}
					provider="Facebook"
				/>
				<IconGithub handler={handleLoginWithOtherProviders} provider="Github" />
			</section>
		</React.Fragment>
	);
};

export default QuickAccess;
