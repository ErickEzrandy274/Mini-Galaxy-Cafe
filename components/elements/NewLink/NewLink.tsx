import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../../context/AuthContext";
import { navData } from "../../modules/Header/constant";
import Link from "next/link";
import Indicator from "../Indicator/Indicator";
import { useUserStuff } from "../../../context/UserStuffContext";

const NewLink: React.FC<navData> = ({ name, href }) => {
	const { pathname } = useRouter();
	const { user } = useAuth();
	const { userStuff } = useUserStuff();

	return href === "/checkout" && user && userStuff?.length ? (
		<Indicator
			className="badge-primary rounded-full"
			infoIndicator={`${userStuff.length > 5 ? `5+` : userStuff.length}`}
		>
			<Link href={href} passHref>
				<a
					className={`px-3 py-2 rounded-md tracking-wide
					${
						pathname === href
							? "bg-gray-900 text-white font-semibold"
							: "text-gray-300 hover:bg-gray-700 border-2 border-dashed border-gray-700 hover:text-white font-medium"
					}
					`}
					aria-current={pathname === href ? "page" : undefined}
				>
					{name}
				</a>
			</Link>
		</Indicator>
	) : (
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
