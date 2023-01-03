import React from "react";
import { navData } from "./constant";
import { NewLink } from "@elements";
import { RouteProps } from "./interface";
import UserDetected from "./UserDetected";

const PreferredRoute: React.FC<RouteProps> = ({
	user,
	navData,
	handleLogout,
}) => {
	return user ? (
		<UserDetected className="px-3" user={user} handleLogout={handleLogout} />
	) : (
		<>
			{navData?.map((item: navData, index: number) => (
				<NewLink {...item} key={`NewLink-${index}`} />
			))}
		</>
	);
};

export default PreferredRoute;
