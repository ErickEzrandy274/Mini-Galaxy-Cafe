import React from "react";
import { UserDetectedProps } from "./interface";

const UserDetected: React.FC<UserDetectedProps> = ({ className, user, handleLogout }) => {
    const customClassLogOut = `px-2 py-1 hover:font-semibold text-lg bg-red-600 transition-colors duration-200 transform rounded-lg 
		hover:bg-red-700 text-gray-200 hover:text-gray-100 md:mx-2`;
    
	return (
		<div className={`flex flex-col md:flex-row text-center gap-3 md:items-center ${className}`}>
			<div className="flex gap-2 md:gap-0 md:flex-col items-start md:items-center font-semibold text-white">
				<p>Hello</p>
				<p>{user.displayName ? user.displayName : user.email}</p>
				<p className="md:hidden">👋👋👋</p>
            </div>
            
			<button onClick={handleLogout} className={customClassLogOut}>
				Logout
			</button>
		</div>
	);
};

export default UserDetected;
