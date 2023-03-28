import React, { useCallback, useMemo, useState } from "react";
import { addBuyerProduct } from "@utils";
import { useAuth, useUserStuff } from "@context";
import { IconWarning, LoadingInfo } from "@elements";
import { CheckoutModalProps } from "./interface";
import Router from "next/router";

const CheckOutModal: React.FC<CheckoutModalProps> = ({
	setIsModalOpen,
	productList,
	modalType,
	handleAction,
}) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const {
		user: { uid },
	} = useAuth();

	const isCancelOrder: boolean = useMemo(
		() => modalType === "Cancel Order",
		[modalType]
	);

	const { setUserStuff } = useUserStuff();
	const text: string = isCancelOrder
		? "cancel order"
		: modalType === "Checkout"
		? "order"
		: "pay";

	const handleOrder = useCallback(async () => {
		setIsLoading(true);
		await addBuyerProduct(productList!, uid);
		setTimeout(() => {
			setUserStuff(productList);
			Router.push("/checkout");
		}, 175);
	}, [productList, uid, setUserStuff]);

	return (
		<>
			<input type="checkbox" id="confirmationModal" className="modal-toggle" />

			<section className="modal text-gray-300">
				<section className="modal-box flex flex-col gap-4 shadow-2xl shadow-gray-300/75 border-b-2 border-gray-300">
					{isLoading ? (
						<LoadingInfo info="Your order is being brought to cart" />
					) : (
						<>
							<article className="flex gap-2 items-center border-b-2 border-gray-300">
								<IconWarning />
								<h3 className="font-bold text-lg uppercase">
									{modalType} Confirmation
								</h3>
							</article>

							<p>
								{isCancelOrder
									? `You have ordered ${productList?.length} items!`
									: "Please check again the number of products that you want to order!"}
							</p>

							<p>
								Are you sure want to {isCancelOrder ? "cancel the order" : text}
								?
							</p>

							<section className="modal-action">
								<button
									onClick={() => setIsModalOpen(false)}
									className="btn btn-outline btn-accent"
								>
									<p className="pt-1">{isCancelOrder ? "No" : "Cancel"}</p>
								</button>

								<button
									onClick={
										modalType === "Checkout" ? handleOrder : handleAction
									}
									className="btn btn-outline btn-success"
								>
									<p className="pt-1">{isCancelOrder ? "Yes" : text}</p>
								</button>
							</section>
						</>
					)}
				</section>
			</section>
		</>
	);
};

export default CheckOutModal;
