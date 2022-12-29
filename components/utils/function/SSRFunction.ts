import { getBuyerProduct, getFavData } from "./dataManipulation";
import { GetServerSidePropsContext } from "next";
import { CheckOutProps } from "../../modules/CheckOut/interface";
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
		const res = await getBuyerProduct(uid);
		const data: CheckOutProps = res?.buyerProduct ?? [];

		return { props: { data } };
	} catch (error) {
		console.error("Error:", error);
	}
}
