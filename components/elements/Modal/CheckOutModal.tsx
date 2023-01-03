import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { CheckoutModalProps } from "./interface";
import { addBuyerProduct } from "@utils";
import { useAuth, useUserStuff } from "@context";
import { useRouter } from "next/router";
import { LoadingInfo } from "../Loader";

const CheckOutModal: React.FC<CheckoutModalProps> = ({
	setIsModalOpen,
	productList,
	modalType,
	handlePayment,
}) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const {
		user: { uid },
	} = useAuth();

	const { setUserStuff } = useUserStuff();
	const text: string = modalType === "Checkout" ? `order` : `pay`;
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
								<FontAwesomeIcon icon={faWarning} className="w-7" />
								<h3 className="font-bold text-lg uppercase">
									{modalType} Confirmation
								</h3>
							</div>

							<p>
								Please check again the number of products that you want to order
							</p>

							<p>Are you sure want to {text}?</p>

							<div className="modal-action">
								<div
									onClick={() => setIsModalOpen(false)}
									className="btn btn-outline btn-accent"
								>
									Cancel
								</div>
								<div
									onClick={
										modalType === "Checkout" ? handleOrder : handlePayment
									}
									className="btn btn-outline btn-success"
								>
									{text}
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default CheckOutModal;
