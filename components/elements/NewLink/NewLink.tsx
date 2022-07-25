import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { navData } from "../../modules/Header/constant";

const NewLink: React.FC<navData> = ({ name, href }) => {
	const { pathname } = useRouter();

	return (
		<Link href={href} passHref>
			<a
				className={`px-3 py-2 rounded-md tracking-wide
					${
						pathname === href
							? "bg-gray-900 text-white font-semibold"
							: "text-gray-300 hover:bg-gray-700 hover:text-white font-medium"
					}
					`}
				aria-current={pathname === href ? "page" : undefined}
			>
				{name}
			</a>
		</Link>
	);
};

export default NewLink;
