import React, { useState } from "react";
import ProductCard from "../../elements/Card/ProductCard";
import CheckOutModal from "../../elements/Modal/CheckOutModal";
import CheckOutButton from "../../elements/Button/CheckOutButton";
import { useAuth } from "../../../context/AuthContext";

const FavoriteWrapper: React.FC<{ data: any }> = ({ data }) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const noData =
		data.listFavItem === undefined || data.listFavItem.length === 0;

	const {
		user: { displayName },
	} = useAuth();
	return (
		<>
			<div className="flex flex-col md:flex-row mx-10 gap-5 md:gap-0">
				<h2
					className={`hidden sm:block text-white text-5xl lg:text-6xl mx-auto tracking-wider font-semibold 
					${noData ? `w-full text-center` : `md:w-2/3 md:text-right`}`}
				>
					{displayName} Favorites...
				</h2>

				<h2 className="sm:hidden text-white text-center text-4xl mx-auto tracking-wider font-semibold">
					<p>{displayName}</p>
					<p>Favorites...</p>
				</h2>

				{!noData && (
					<div className="flex flex-col justify-center items-center md:items-end md:w-1/3">
						<CheckOutButton onClick={() => setIsModalOpen(true)} />
						{isModalOpen && (
							<CheckOutModal setIsModalOpen={setIsModalOpen} />
						)}
					</div>
				)}
			</div>
			{noData ? (
				<div className="flex flex-col gap-5 text-center text-4xl sm:text-5xl lg:text-6xl text-gray-300 my-10">
					<h2>No favorites product</h2>
					<p>Select it first!</p>
				</div>
			) : (
				<div className="flex flex-wrap m-5">
					{data?.listFavItem?.map((item: any) => {
						return (
							<ProductCard
								key={item.type + "-" + item.dataId}
								{...item}
								type={item.type}
							/>
						);
					})}
				</div>
			)}
		</>
	);
};

export default FavoriteWrapper;
