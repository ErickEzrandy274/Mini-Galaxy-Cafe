import { getBuyerProduct, getFavData } from "./dataManipulation";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";

export async function getFavoriteData(ctx: GetServerSidePropsContext) {
	const uid = nookies.get(ctx)?.userId;

	try {
		const data = await getFavData(uid);

		return { props: { data } };
	} catch (error) {
		console.error("Error:", error);
	}
}

export async function getBuyerData(ctx: GetServerSidePropsContext) {
	const uid = nookies.get(ctx)?.userId;

	try {
		const data = await getBuyerProduct(uid);

		return { props: { data } };
	} catch (error) {
		console.error("Error:", error);
	}
}
