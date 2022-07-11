import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { CheckoutModalProps } from "./interface";
import { addBuyerData } from "../../utils/function/dataManipulation";
import { useAuth } from "../../../context/AuthContext";
import { useRouter } from "next/router";

const CheckOutModal: React.FC<CheckoutModalProps> = ({
	setIsModalOpen,
	productList,
}) => {
	const { user: { uid } } = useAuth();
	const { push } = useRouter();
	const handleOrder = async () => {
		await addBuyerData(productList, uid)
		push('/checkout')
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
					<div className="flex gap-2 items-center border-b-2 border-gray-300">
						<FontAwesomeIcon icon={faWarning} className="w-7" />
						<h3 className="font-bold text-lg uppercase">
							Checkout Confirmation
						</h3>
					</div>
					<p>
						Please check again the number of products that you want
						to order
					</p>

					<p>Are you sure want to order?</p>
					<div className="modal-action">
						<div
							onClick={() => setIsModalOpen(false)}
							className="btn btn-outline btn-accent"
						>
							Cancel
						</div>
						<div
							onClick={handleOrder}
							className="btn btn-outline btn-success"
						>
							Order
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CheckOutModal;
