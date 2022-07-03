import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
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
		const { name, price, image } = doc.data();
		const img = await imageRef(type, image._key.path.segments[8]);
		const newData = {
			dataId: doc.id,
			name,
			price,
			image: img,
		};
		tempData.push(newData);
	});

	setData(tempData);
	setTimeout(() => {
		setIsLoading(false);
	}, 2000);
};

type handleFavType = {
	fav: boolean;
	setFav: React.Dispatch<SetStateAction<boolean>>;
	uid: string;
	cardProps: {
		name: string;
		price: string;
		image: string;
		type: string;
	};
};

export const handleFav = async (args: handleFavType) => {
	const { fav, setFav, uid, cardProps } = args;
	const favRef = doc(database, "Favorite", uid);

	await getDoc(favRef).then((res) => {
		let prev = res.data() ? res.data()?.listFavItem : [];
		if (fav) {
			prev = prev.filter((data: any) => data?.name !== cardProps.name);
			setDoc(doc(database, "Favorite", uid), {
				listFavItem: [...prev],
			});
			return;
		}
		setDoc(doc(database, "Favorite", uid), {
			listFavItem: [
				...prev,
				{
					...cardProps,
				},
			],
		});
	});

	setFav(!fav);
};

export const getFavData = async (uid: string) => {
	const favRef = doc(database, "Favorite", uid);
	let data: any = [];
	data = await getDoc(favRef).then((res) => {
		return res.data() ? res.data() : [];
	});
	return data;
};
