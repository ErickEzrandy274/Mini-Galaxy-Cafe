import { useRouter } from "next/router";
import React from "react";
import FavButton from "../Button/FavButton";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import { ProductCardProps } from "./interface";

const ProductCard: React.FC<ProductCardProps> = ({ name, dataId, price, image, index, listFavId }) => {
	const { pathname } = useRouter();

	return (
		<div className="cursor-default w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 py-3 sm:pb-5 sm:px-5 mx-auto">
			<div className="card card-compact bg-base-100 shadow-xl">
				<OptimizedImage image={image} index={index} />

				<div className="card-body text-white tracking-wide">
					<h2 className="card-title font-semibold">{name}</h2>
					<p className="text-lg">Rp {price}</p>
					<div className="card-actions justify-between items-center">
						<FavButton pathname={pathname} listFavId={listFavId} dataId={dataId} />
						<button className="btn btn-primary text-base sm:text-lg shadow-xl">Buy Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
