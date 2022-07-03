import React, { useState } from "react";
import ProductCard from "../../elements/Card/ProductCard";
import CheckOutModal from "../../elements/Modal/CheckOutModal";
import CheckOutButton from "../../elements/Button/CheckOutButton";
import { useAuth } from "../../../context/AuthContext";

const FavoriteWrapper: React.FC<{ data: any }> = ({ data }) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const {
		user: { displayName },
	} = useAuth();
	return (
		<>
			<div className="flex flex-col md:flex-row mx-10 gap-5 md:gap-0">
				<h2 className="text-white text-5xl lg:text-6xl mx-auto md:text-right tracking-wider font-semibold md:w-2/3">
					{displayName} Favorites...
				</h2>

				<div className="flex flex-col justify-center items-center md:items-end md:w-1/3">
					<CheckOutButton onClick={() => setIsModalOpen(true)} />
					{isModalOpen && <CheckOutModal setIsModalOpen={setIsModalOpen} />}
				</div>
			</div>
			<div className="flex flex-wrap m-5">
				{data?.listFavItem?.map((item: any) => {
					return <ProductCard key={item.type + "-" + item.dataId} {...item} type={item.type} />;
				})}
			</div>
		</>
	);
};

export default FavoriteWrapper;
