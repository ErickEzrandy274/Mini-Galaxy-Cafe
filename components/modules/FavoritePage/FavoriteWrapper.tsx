import React from "react";
import ProductCard from "../../elements/Card/ProductCard";

const FavoriteWrapper: React.FC<{ data: any }> = ({ data }) => {
	return (
		<>
			<div className="flex flex-wrap m-5">
				{data?.listFavItem?.map((item: any) => {
					return <ProductCard key={item.type + "-" + item.dataId} {...item} type={item.type} />;
				})}
			</div>
		</>
	);
};

export default FavoriteWrapper;
