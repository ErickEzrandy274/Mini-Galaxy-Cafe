import {
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	setDoc,
} from "firebase/firestore";
import React, { SetStateAction } from "react";
import { BuyerProduct } from "../../elements/Card/interface";
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
		price: number;
		image: string;
		type: string;
		dataId: string;
	};
};

export const handleFav = async (args: handleFavType, pathname: string) => {
	const { fav, setFav, uid, cardProps } = args;
	const favRef = doc(database, "Favorite", uid);

	await getDoc(favRef).then(async (res) => {
		let prev = res.data() ? res.data()?.listFavItem : [];
		if (fav) {
			prev = prev.filter((data: any) => data?.name !== cardProps.name);
			await setDoc(favRef, {
				listFavItem: [...prev],
			});

			pathname === "/favorite" && prev.length === 0 && window.location.reload();
			return;
		}

		await setDoc(favRef, {
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

export const addBuyerProduct = async (item: BuyerProduct[], uid: string) => {
	const buyerRef = doc(database, "Buyer", uid);
	await setDoc(buyerRef, { buyerProduct: item });
};

export const getBuyerProduct = async (uid: string) => {
	const buyerRef = doc(database, "Buyer", uid);
	let data: any = [];
	data = await getDoc(buyerRef).then((res) => {
		return res.data() ? res.data() : [];
	});
	return data;
};

export const deleteBuyerProduct = async (uid: string) => {
	const buyerRef = doc(database, "Buyer", uid);
	await deleteDoc(buyerRef);
};
