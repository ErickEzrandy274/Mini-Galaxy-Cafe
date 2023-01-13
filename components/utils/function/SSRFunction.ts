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

export const fetchProducts = async (
	indicator: "Beverages" | "Foods" | "Snacks"
) => {
	const response = await fetch(`${BASE_URL}${indicator}`, getHeaders);
	const { documents } = await response.json();

	return setData(documents);
};
