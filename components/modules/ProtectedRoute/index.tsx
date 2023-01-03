import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../../context";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	const { user } = useAuth();
	const { push } = useRouter();

	useEffect(() => {
		!user && push("/login");
	}, [push, user]);

	return <>{user ? children : null}</>;
};

export default ProtectedRoute;
