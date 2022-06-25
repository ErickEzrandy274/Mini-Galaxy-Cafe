import { collection, getDocs } from "firebase/firestore";
import React, { SetStateAction } from "react";
import { database, imageRef } from "../firebase/firebase";

type DataFetchType = {
	type: "Foods" | "Beverages" | "Snacks";
	setData: React.Dispatch<SetStateAction<any[]>>;
	setIsLoading: React.Dispatch<SetStateAction<boolean>>;
};

export const getData = async (item: DataFetchType) => {
	const { type, setData, setIsLoading } = item;
	setIsLoading(true);
	const tempData: any[] = [];

	const querySnapshot = await getDocs(collection(database, type));
	querySnapshot.forEach(async (doc) => {
		const { name, price, image, buyer, listFavId } = doc.data();
		const img = await imageRef(type, image._key.path.segments[8]);
		const newData = {
			dataId: doc.id,
			name,
			price,
			image: img,
			buyer,
			listFavId,
		};
		tempData.push(newData);
	});

	setData(tempData);
	setTimeout(() => {
		setIsLoading(false);
	}, 2000);
};
