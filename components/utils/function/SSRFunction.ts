import {
	getBuyerProduct,
	getFavData,
	setData,
	BASE_URL,
	getHeaders,
} from "@utils";
import { GetServerSidePropsContext } from "next";
import { CheckOutProps } from "@modules";
import { FavCardProps } from "@elements";
import nookies from "nookies";

export async function getFavoriteData(ctx: GetServerSidePropsContext) {
	const uid = nookies.get(ctx)?.userId;

	try {
		const res = uid && (await getFavData(uid));
		const data: FavCardProps = res?.listFavItem ?? [];

		return { props: { data } };
	} catch (error) {
		console.error("Error:", error);
	}
}

export async function getBuyerData(ctx: GetServerSidePropsContext) {
	const uid = nookies.get(ctx)?.userId;

	try {
		const res = uid && (await getBuyerProduct(uid));
		const data: CheckOutProps = res?.buyerProduct ?? [];

		return { props: { data } };
	} catch (error) {
		console.error("Error:", error);
	}
}

export const fetchBeverages = async () => {
	const response = await fetch(`${BASE_URL}Beverages`, getHeaders);
	const { documents } = await response.json();

	return setData(documents);
};

export const fetchFoods = async () => {
	const response = await fetch(`${BASE_URL}Foods`, getHeaders);
	const { documents } = await response.json();

	return setData(documents);
};

export const fetchSnacks = async () => {
	const response = await fetch(`${BASE_URL}Snacks`, getHeaders);
	const { documents } = await response.json();

	return setData(documents);
};
