import React from "react";
import { toCapitalize } from "@utils";
import { HandlerAccountProps } from "./interface";
import Link from "next/link";

const HandlerAccount: React.FC<HandlerAccountProps> = ({ content, href, className }) => {
	
	return (
		<p className="my-6 mb-3 text-sm text-center text-gray-400">
			{content}{" "}
			<Link href={href} passHref>
				<a className={className}>{toCapitalize(href.substring(1))} here</a>
			</Link>
		</p>
	);
};

export default HandlerAccount;
