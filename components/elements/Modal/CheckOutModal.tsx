import React, { useState } from "react";
import { addBuyerProduct } from "@utils";
import { useAuth, useUserStuff } from "@context";
import { IconWarning, LoadingInfo } from "@elements";
import { useRouter } from "next/router";
import { CheckoutModalProps } from "./interface";

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

	const isCancelOrder: boolean = modalType === "Cancel Order";

	const { setUserStuff } = useUserStuff();
	const text: string = isCancelOrder
		? "cancel order"
		: modalType === "Checkout"
		? "order"
		: "pay";
	const { push } = useRouter();

	const handleOrder = async () => {
		setIsLoading(true);
		await addBuyerProduct(productList!, uid);
		setTimeout(() => {
			setUserStuff(productList);
			push("/checkout");
		}, 175);
	};

	return (
		<>
			<input type="checkbox" id="confirmationModal" className="modal-toggle" />

			<div className="modal text-gray-300">
				<div className="modal-box flex flex-col gap-4 shadow-2xl shadow-gray-300/75 border-b-2 border-gray-300">
					{isLoading ? (
						<LoadingInfo info="Your order is being brought to cart" />
					) : (
						<>
							<div className="flex gap-2 items-center border-b-2 border-gray-300">
								<IconWarning />
								<h3 className="font-bold text-lg uppercase">
									{modalType} Confirmation
								</h3>
							</div>

							<p>
								{isCancelOrder
									? `You have ordered ${productList?.length} items!`
									: "Please check again the number of products that you want to order!"}
							</p>

							<p>
								Are you sure want to {isCancelOrder ? "cancel the order" : text}
								?
							</p>

							<div className="modal-action">
								<button
									onClick={() => setIsModalOpen(false)}
									className="btn btn-outline btn-accent"
								>
									{isCancelOrder ? "No" : "Cancel"}
								</button>

								<button
									onClick={
										modalType === "Checkout" ? handleOrder : handleAction
									}
									className="btn btn-outline btn-success"
								>
									{isCancelOrder ? "Yes" : text}
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default CheckOutModal;
