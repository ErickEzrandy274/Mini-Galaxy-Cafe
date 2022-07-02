import React, { useEffect, useState } from "react";
import ProductCard from "../../elements/Card/ProductCard";
import { LandingPageProps } from "../ProductPage/interface";
import { getFavData } from "../../utils/function/dataManipulation";
import { useAuth } from "../../../context/AuthContext";
import { DocumentData } from "firebase/firestore";

const ProductPage: React.FC<LandingPageProps> = ({ data, type }) => {
	const {
		user: { uid },
	} = useAuth();

	const [favData, setFavData] = useState<DocumentData | undefined>([]);

	useEffect(() => {
		const fetchData = async () => {
			await getFavData(uid).then((res) => {
				const data = res?.listFavItem?.map((item: any) => {
					return item.name;
				});
				setFavData(data ? data : []);
			});
		};

		fetchData();
	}, []);

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

export default ProductPage;
