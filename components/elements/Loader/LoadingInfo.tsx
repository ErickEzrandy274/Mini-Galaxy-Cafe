import React from "react";
import { LoadingInfoProps } from "./interface";
import SecondaryLoader from "./SecondaryLoader";

const LoadingInfo: React.FC<LoadingInfoProps> = ({ info }) => {
    
	return (
		<div className="flex flex-col gap-20 relative font-semibold">
			<SecondaryLoader />
			<h2 className="text-center text-lg sm:text-xl">
				{info}
			</h2>
		</div>
	);
};

export default LoadingInfo;
