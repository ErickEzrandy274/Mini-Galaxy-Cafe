import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { classNames } from "./constant";
import { RouteProps } from "./interface";
import UserDetected from "./UserDetected";

const PreferredRoute: React.FC<RouteProps> = ({ user, navData, handleLogout }) => {
	const { pathname } = useRouter();

	return user ? (
		<UserDetected
			className="px-2"
			user={user}
			handleLogout={handleLogout}
		/>
	) : (
		<>
			{navData.map(({ name, href }) => (
				<Link key={name} href={href} passHref>
					<a
						className={classNames(
							pathname === href
								? "bg-gray-900 text-white"
								: "text-gray-300 hover:bg-gray-700 hover:text-white",
							"px-3 py-2 rounded-md tracking-wide font-medium"
						)}
						aria-current={pathname === href ? "page" : undefined}
					>
						{name}
					</a>
				</Link>
			))}
		</>
	);
};

export default PreferredRoute;
