import React from "react";
import ProductCard from "../../elements/Card/ProductCard";
import { LandingPageProps } from "../ProductPage/interface";
import { useFavContext } from "../../../context/FavContext";

const FavoriteWrapper: React.FC<LandingPageProps> = ({ data, type }) => {
	const { favData } = useFavContext();

	const newData = data.filter((item: any) => favData?.includes(item?.name));

	return (
		<>
			<div className="text-white text-center text-5xl lg:text-6xl tracking-wider font-semibold">Favorite {type}...</div>
			<div className="flex flex-wrap m-5">
				{newData.map((item: any) => {
					return <ProductCard key={type + "-" + item.dataId} {...item} type={type} />;
				})}
			</div>
		</>
	);
};

export default FavoriteWrapper;
