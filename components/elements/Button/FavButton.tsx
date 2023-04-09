import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth, useFavContext } from "@utils";
import { handleFav } from "@utils";
import { IconStar, FavButtonProps } from "@elements";

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
			<IconStar fav={fav} />
		</button>
	);
};

export default FavButton;
