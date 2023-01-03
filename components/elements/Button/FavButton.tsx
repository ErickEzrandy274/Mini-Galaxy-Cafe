import React, { useEffect, useState } from "react";
import { FavButtonProps } from "./interface";
import { useRouter } from "next/router";
import { useAuth, useFavContext } from "@context";
import { handleFav } from "@utils";

const FavButton: React.FC<FavButtonProps> = ({ data, setRemoved }) => {
	const {
		user: { uid },
	} = useAuth();

	const { pathname } = useRouter();

	const { favData, setFavDataSize } = useFavContext();
	useEffect(() => {
		favData?.length > 0 && setFav(favData?.includes(data.name));
	}, [data.name, favData]);

	const [fav, setFav] = useState<boolean>(favData?.includes(data.name));

	const args = {
		fav,
		setFav,
		uid,
		data,
		setFavDataSize,
	};

	const handleClick = () => {
		if (pathname === "/favorite") setRemoved(true);
		handleFav(args);
	};

	return (
		<button onClick={handleClick}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 transition-all duration-300 ease-in-out"
				fill={fav ? "#FFD700" : "none"}
				viewBox="0 0 24 24"
				stroke={fav ? "#FFD700" : "currentColor"}
				strokeWidth="2"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
				/>
			</svg>
		</button>
	);
};

export default FavButton;
