import React from "react";
import { toCapitalize } from "../../utils/function/function";
import { HandlerAccountProps } from "./interface";

const HandlerAccount: React.FC<HandlerAccountProps> = ({ content, href, className }) => {
	
	return (
		<p className="mt-6 text-sm text-center text-gray-400">
			{content}{" "}
			<a
				href={href}
				className={className}
			>
				{toCapitalize(href.substring(1))} here
			</a>
		</p>
	);
};

export default HandlerAccount;
