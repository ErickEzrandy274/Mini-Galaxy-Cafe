import React, { createContext, useContext, useEffect, useState } from "react";
import ProductCard from "../../elements/Card/ProductCard";
import { LandingPageProps } from "./interface";
import { getFavData } from "../../utils/function/dataManipulation";
import { useAuth } from "../../../context/AuthContext";
import { DocumentData } from "firebase/firestore";

const FavContext = createContext({} as any);

const FavContextProvider: React.FC<any> = ({ children }) => {
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

	return <FavContext.Provider value={{ favData }}>{children}</FavContext.Provider>;
};

export const useFavContext = () => useContext(FavContext);

const ProductPage: React.FC<LandingPageProps> = ({ data, type }) => {
	return (
		<FavContextProvider>
			<div className="text-white text-center text-5xl lg:text-6xl tracking-wider font-semibold">Our {type}...</div>
			<div className="flex flex-wrap m-5">
				{data.map((item: any) => {
					return <ProductCard key={type + "-" + item.dataId} {...item} type={type} />;
				})}
			</div>
		</FavContextProvider>
	);
};

export default ProductPage;
