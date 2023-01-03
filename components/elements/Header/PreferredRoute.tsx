import React from "react";
import { NewLink, UserDetected, RouteProps, navData } from "@elements";

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
