import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { CheckoutModalProps } from "./interface";

const CheckOutModal: React.FC<CheckoutModalProps> = ({ setIsModalOpen }) => {
	const handleOrder = () => {
		// TODO: implement store to database
	};

	return (
		<>
			<input
				type="checkbox"
				id="confirmationModal"
				className="modal-toggle"
			/>

			<div className="modal text-gray-300">
				<div className="modal-box flex flex-col gap-4 shadow-2xl shadow-gray-300/75">
					<div className="flex gap-2 items-center">
						<FontAwesomeIcon icon={faWarning} className="w-7" />
						<h3 className="font-bold text-lg uppercase">
							Checkout Confirmation
						</h3>
					</div>
					<p>
						Please check again the number of products that you wanna
						buy because it won&apos;t be able to change after you
						click the Order button
					</p>

					<p>
						Are you sure wanna order that product?
					</p>
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
