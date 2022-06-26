import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
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

type handleFavType = {
	pathname: string;
	dataId: string;
	fav: boolean;
	list: string[];
	uid: string;
	setList: React.Dispatch<SetStateAction<string[]>>;
	setFav: React.Dispatch<SetStateAction<boolean>>;
};

export const handleFav = async (args: handleFavType) => {
	const { pathname, dataId, fav, list, uid, setList, setFav } = args;
	const path = {
		"/food": "Foods",
		"/beverage": "Beverages",
		"/snack": "Snacks",
	};

	const favRef = doc(database, path[pathname as keyof typeof path], dataId);

	let newList = Array.from(list);
	if (fav) {
		newList = newList.filter((userId) => userId !== uid);
	} else {
		newList.push(uid);
	}

	await updateDoc(favRef, {
		listFavId: newList,
	});

	setList(newList);
	setFav(!fav);
};
