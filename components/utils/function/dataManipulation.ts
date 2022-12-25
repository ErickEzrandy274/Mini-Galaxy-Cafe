import React, { SetStateAction } from "react";
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { BuyerProduct } from "../../elements/Card/interface";
import { database } from "../firebase/firebase";

export const setData = (documents: any[]) => {
	const data = documents?.map(({ name: productName, fields }: any) => {
		const { name, price, image } = fields;
		const dataId = productName.split("/").at(-1);

		return {
			dataId,
			name: name.stringValue,
			price: price.integerValue,
			image: image.stringValue,
		};
	});

	return data;
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
	setFavDataSize: React.Dispatch<SetStateAction<any>>;
};

export const handleFav = async (args: handleFavType, pathname: string) => {
	const { fav, setFav, uid, cardProps, setFavDataSize } = args;
	const favRef = doc(database, "Favorite", uid);

	await getDoc(favRef).then(async (res) => {
		let prev = res.data() ? res.data()?.listFavItem : [];
		if (fav) {
			prev = prev.filter((data: any) => data?.name !== cardProps.name);
			await setDoc(favRef, {
				listFavItem: [...prev],
			});
			setFavDataSize(prev.length);
			return;
		}

		const newListItem = [
			...prev,
			{
				...cardProps,
			},
		];

		await setDoc(favRef, {
			listFavItem: newListItem,
		});

		setFavDataSize(newListItem.length);
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
