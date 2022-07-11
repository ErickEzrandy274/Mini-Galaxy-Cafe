import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { CheckoutModalProps } from "./interface";
import { addBuyerProduct } from "../../utils/function/dataManipulation";
import { useAuth } from "../../../context/AuthContext";
import { useRouter } from "next/router";
import SecondaryLoader from "../Loader/SecondaryLoader";

const CheckOutModal: React.FC<CheckoutModalProps> = ({
	setIsModalOpen,
	productList,
	type,
	handlePayment,
}) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const {
		user: { uid },
	} = useAuth();
	const { push } = useRouter();
	const handleOrder = async () => {
		setIsLoading(true);
		await addBuyerProduct(productList!, uid);
		setTimeout(() => {
			push("/checkout");
		}, 300);
	};

	return (
		<>
			<input
				type="checkbox"
				id="confirmationModal"
				className="modal-toggle"
			/>

			<div className="modal text-gray-300">
				<div className="modal-box flex flex-col gap-4 shadow-2xl shadow-gray-300/75 border-b-2 border-gray-300">
					{isLoading ? (
						<div className="flex flex-col gap-20 relative">
							<SecondaryLoader />
							<h2 className="text-center text-lg sm:text-xl">Your order is being brought to cart</h2>
						</div>
					) : (
						<>
							<div className="flex gap-2 items-center border-b-2 border-gray-300">
								<FontAwesomeIcon
									icon={faWarning}
									className="w-7"
								/>
								<h3 className="font-bold text-lg uppercase">
									{type} Confirmation
								</h3>
							</div>
							<p>
								Please check again the number of products that
								you want to order
							</p>

							<p>{`Are you sure want to ${
								type === "Checkout" ? `order` : `pay`
							}?`}</p>
							<div className="modal-action">
								<div
									onClick={() => setIsModalOpen(false)}
									className="btn btn-outline btn-accent"
								>
									Cancel
								</div>
								<div
									onClick={
										type === "Checkout"
											? handleOrder
											: handlePayment
									}
									className="btn btn-outline btn-success"
								>
									{type === "Checkout" ? `Order` : `Pay`}
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
